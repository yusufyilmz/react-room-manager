/* eslint-disable no-undef */
import * as actions from '..';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';
import * as actionTypes from '../../constants/actionTypes';
import { data } from '../../../db';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('ACTIONS', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('ROOMS SELECTROOM ACTION SUCCESS', () => {
    const item = { test: '' };
    const expectedActions = [
      {
        type: actionTypes.SELECT_ROOM_SUCCESS,
        payload: item
      }
    ];

    return store.dispatch(actions.selectRoom(item)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // test('ROOMS FETCH ACTION SUCCESS', () => {
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({
  //       status: 200,
  //       data
  //     });
  //   });

  //   const expectedActions = [
  //     {
  //       type: actionTypes.LOADING_ROOMS_SUCCESS,
  //     },
  //     {
  //       type: actionTypes.FETCH_ROOMS_SUCCESS,
  //       payload: {
  //         data
  //       }
  //     },
  //   ];

  //   return store.dispatch(actions.fetchRooms()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});

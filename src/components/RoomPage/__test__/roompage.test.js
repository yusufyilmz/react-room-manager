/* eslint-disable import/no-named-as-default */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import { RoomPage } from '../index';
import ErrorHandler from '../../Error';
import RoomCard from '../../RoomCard';
import data from '../../../../db.json';

const middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware];

describe('ROOMPAGE COMPONENT', () => {
  const mockStore = configureMockStore(middlewares);
  const room = {
    items: data.rooms
  };

  const store = mockStore({
    room,
    loader: {
      loading: false,
    },
    error: {
      error: false,
    }
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <RoomPage />
      </Provider>
    );
  });


  test('renders element correctly', () => {
    expect(wrapper.find(ErrorHandler).length).toBe(1);
  });

  test('renders element correctly', () => {
    expect(wrapper.find('RoomPageListWrapper').length).toBe(1);
  });

  test('renders element correctly', () => {
    expect(wrapper.find(RoomCard).length).toEqual(store.getState().room.items.length);
  });

  test('renders props correctly', () => {
    expect(wrapper.find(ErrorHandler).prop('error')).toEqual(store.getState().error.error);
  });

  test('renders props correctly', () => {
    expect(wrapper.find(RoomCard).at(0).prop('item')).toEqual(store.getState().room.items[0]);
  });

//   test('snapchat correctly', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
});

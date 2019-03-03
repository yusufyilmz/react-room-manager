/* eslint-disable no-undef */
import roomReducer from '../room-reducer';
import * as actionTypes from '../../constants/actionTypes';
import { data } from '../../../db';

describe('CLIENT REDUCERS', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      items: [],
      selectedItem: null
    };
  });

  describe('INITIAL STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      expect(roomReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('FETCH BOOKS SUCCESS', () => {
    test('returns correct state', () => {
      const payload = { data };
      const action = { type: actionTypes.FETCH_ROOMS_SUCCESS, payload };
      expect(roomReducer(undefined, action)).toEqual({
        ...initialState, items: payload.data
      });
    });
  });
});

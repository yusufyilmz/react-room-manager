import * as actionTypes from '../constants/actionTypes';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
      };
    case actionTypes.FETCH_ROOMS_ERROR:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

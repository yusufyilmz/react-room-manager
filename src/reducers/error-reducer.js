
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  error: false,
  message: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ROOMS_ERROR:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case actionTypes.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        error: false,
        message: ''
      };
    default:
      return state;
  }
}

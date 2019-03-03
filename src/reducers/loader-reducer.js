
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOADING_ROOMS_SUCCESS:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ROOMS_SUCCESS:
    case actionTypes.FETCH_ROOMS_ERROR:
    case actionTypes.EDIT_ROOM_SUCCESS:
    case actionTypes.SORT_ROOMS_SUCCESS:
    case actionTypes.FILTER_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

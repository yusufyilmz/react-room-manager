/* eslint-disable no-case-declarations */
/* eslint-disable no-var */
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  items: [],
  selectedItem: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        initialItems: action.payload.data,
        items: action.payload.data,
      };
    case actionTypes.SELECT_ROOM_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case actionTypes.EDIT_ROOM_SUCCESS:
      const items = [...state.items];

      const editedRooms = items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        selectedItem: null,
        items: editedRooms,
        initialItems: editedRooms
      };

    case actionTypes.FILTER_ROOMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };

    case actionTypes.SORT_ROOMS_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        items: action.payload,
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

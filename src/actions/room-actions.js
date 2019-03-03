/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../constants/actionTypes';
import roomAPI from '../api/roomAPI';

const fetchRoomsError = data => ({
  type: actionTypes.FETCH_ROOMS_ERROR,
  payload: data
});

const fetchRoomsSuccess = data => ({
  type: actionTypes.FETCH_ROOMS_SUCCESS,
  payload: data
});

const sortRoomsSuccess = data => ({
  type: actionTypes.SORT_ROOMS_SUCCESS,
  payload: data
});


const editRoomsSuccess = data => ({
  type: actionTypes.EDIT_ROOM_SUCCESS,
  payload: data
});


const loadingSuccess = () => ({
  type: actionTypes.LOADING_ROOMS_SUCCESS,
});


const filterRoomsSuccess = data => ({
  type: actionTypes.FILTER_ROOMS_SUCCESS,
  payload: data
});


export const fetchRooms = () => async (dispatch) => {
  dispatch(loadingSuccess());
  const response = await roomAPI.fetchRooms();

  if (response.data && !response.data.error) {
    return dispatch(fetchRoomsSuccess(response));
  }

  dispatch(fetchRoomsError(response.message));
};

// export const filterRooms = keyword => async (dispatch, getState) => {
//   const { initialItems } = getState().room;
//   const loweredKeyword = keyword.toLowerCase();

//   const filteredArray = [
//     ...initialItems.filter(x => x.description.toLowerCase().indexOf(loweredKeyword) !== -1),
//     ...initialItems.filter(x => x.city.toLowerCase().indexOf(loweredKeyword) !== -1),
//     ...initialItems.filter(x => x.address.toLowerCase().indexOf(loweredKeyword) !== -1),
//     ...initialItems.filter(x => x.country.toLowerCase().indexOf(loweredKeyword) !== -1),
//   ];

//   dispatch(filterRoomsSuccess(filteredArray.filter((item, pos) => filteredArray.indexOf(item) === pos)));
// };

export const filterRooms = keyword => async (dispatch) => {

  dispatch(loadingSuccess());
  const response = await roomAPI.filterRooms(keyword);
  if (response.data && !response.data.error) {
    return dispatch(filterRoomsSuccess(response.data));
  }
  dispatch(fetchRoomsError(response.message));
};

export const sortRooms = rooms => async (dispatch) => {
  dispatch(loadingSuccess());
  dispatch(sortRoomsSuccess(rooms));
};

export const selectRoom = item => async (dispatch) => {
  dispatch({
    type: actionTypes.SELECT_ROOM_SUCCESS,
    payload: item
  });
};


export const editRoom = room => async (dispatch) => {
  dispatch(loadingSuccess());
  const response = await roomAPI.editRoom(room);
  if (response.data && !response.data.error) {
    return dispatch(editRoomsSuccess(response.data));
  }

  dispatch(fetchRoomsError(response.message));
};

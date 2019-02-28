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

const loadingSuccess = () => ({
  type: actionTypes.LOADING_ROOMS_SUCCESS,
});

export const fetchRooms = keyword => async (dispatch) => {
  dispatch(loadingSuccess());
  const response = await roomAPI.fetchRooms(keyword);
  if (response.data && !response.data.error) {
    return dispatch(fetchRoomsSuccess(response));
  }
  dispatch(fetchRoomsError(response.data.error));
};

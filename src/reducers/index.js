import { combineReducers } from 'redux';
import room from './room-reducer';
import loader from './loader-reducer';
import error from './error-reducer';

const rootReducer = combineReducers({
  room,
  loader,
  error
});

export default rootReducer;

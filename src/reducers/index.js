import { combineReducers } from 'redux';
import room from './room-reducer';
import loader from './loader-reducer';

const rootReducer = combineReducers({
  room,
  loader
});

export default rootReducer;

import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import shelterReducer from './shelter_reducer';

export default combineReducers({
  session: sessionReducer,
  shelters: shelterReducer
});

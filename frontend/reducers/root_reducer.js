import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import shelterReducer from './shelter_reducer';
import userReducer from './user_reducer';

export default combineReducers({
  session: sessionReducer,
  users: userReducer,
  shelters: shelterReducer
});

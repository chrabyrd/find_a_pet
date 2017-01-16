import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import shelterReducer from './shelter_reducer';
import shelterDetailsReducer from './shelter_details_reducer';
import petReducer from './pet_reducer';
import petDetailsReducer from './pet_details_reducer';
import petImageReducer from './pet_image_reducer';


export default combineReducers({
  session: sessionReducer,
  users: userReducer,
  shelters: shelterReducer,
  shelterDetails: shelterDetailsReducer,
  pets: petReducer,
  petDetails: petDetailsReducer,
  petImages: petImageReducer
});

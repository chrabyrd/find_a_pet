import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import shelterReducer from './shelter_reducer';
import shelterDetailsReducer from './shelter_details_reducer';
import petReducer from './pet_reducer';
import petDetailsReducer from './pet_details_reducer';
import searchResultsReducer from './search_results_reducer';


export default combineReducers({
  session: sessionReducer,
  shelters: shelterReducer,
  shelterDetails: shelterDetailsReducer,
  pets: petReducer,
  petDetails: petDetailsReducer,
  searchResults: searchResultsReducer
});

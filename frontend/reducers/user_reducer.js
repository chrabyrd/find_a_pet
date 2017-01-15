import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_ERRORS} from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default userReducer;

import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS }
  from '../actions/session_actions';


const _nullUser = Object.freeze({
  user: null,
  errors: []
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, { user: action.user });
    case RECEIVE_ERRORS:
      return merge({}, _nullUser, { errors: action.errors });
    case CLEAR_ERRORS:
      let newState = merge({}, _nullUser);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;

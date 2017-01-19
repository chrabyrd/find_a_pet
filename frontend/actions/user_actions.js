import * as APIUtil from '../util/api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const removeUser = user => ({
  type: REMOVE_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)))
);

export const deleteUser = user => dispatch => (
  APIUtil.deleteUser(user)
    .then(newUser => dispatch(removeUser(newUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

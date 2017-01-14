import * as APIUtil from '../util/api_util';

export const RECEIVE_SHELTER = 'RECEIVE_SHELTER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveShelter = shelter => ({
  type: RECEIVE_SHELTER,
  shelter
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const createShelter = shelter => dispatch => (
  APIUtil.createShelter(shelter)
    .then(newShelter => dispatch(receiveShelter(newShelter)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

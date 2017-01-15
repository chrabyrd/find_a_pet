import * as APIUtil from '../util/api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_PET_IMAGE = 'RECEIVE_PET_IMAGE';
export const REMOVE_PET_IMAGE = 'REMOVE_PET_IMAGE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receivePetImage = petImage => ({
  type: RECEIVE_PET_IMAGE,
  petImage
});

const removePetImage = petImage => ({
  type: REMOVE_PET_IMAGE,
  petImage
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchPetImage = id => dispatch => (
  APIUtil.fetchPetImage(id)
    .then(newPetImage => dispatch(receivePetImage(newPetImage)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createPetImage = petImage => dispatch => (
  APIUtil.createPetImage(petImage)
    .then(newPetImage => dispatch(receivePetImage(newPetImage)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updatePetImage = petImage => dispatch => (
  APIUtil.updatePetImage(petImage)
    .then(newPetImage => dispatch(receivePetImage(newPetImage)))
    .then(hashHistory.push('/'))
);

export const deletePetImage = petImage => dispatch => (
  APIUtil.deletePetImage(petImage)
    .then(newPetImage => dispatch(removePetImage(newPetImage)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

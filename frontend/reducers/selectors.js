import { values } from 'lodash';

export const selectAllPets = ({ pets }) => values(pets);

export const selectAllShelters = ({ shelters }) => values(shelters);

import { values } from 'lodash';

export const selectAllPets = ({ pets }) => values(pets);

export const selectPet = ({ pets }, id) => {
   const pet = pets[id] || {};
   return pet;
};

export const selectAllShelters = ({ shelters }) => values(shelters);

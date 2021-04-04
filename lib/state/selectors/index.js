import * as _ from "lodash";
import { createSelector } from "reselect";

export const getUserInformations = (state) => {
  return state.user.informations;
};

export const getUserCharactersInformations = (state) => {
  return state.user.informations.characters;
};

export const getByLastUpdateUserCharacter = (state) => {
  return _.orderBy(
    getUserCharactersInformations(state),
    ["updatedAt"],
    ["desc"]
  );
};

export const getCharacterList = (state) => {
  return state.characters.charactersList;
};

export const getCharacterNotes = (state) => {
  return state.note.notes;
};

export const getNoteSelected = (state) => {
  const note = state.note.notes.filter(
    (n) => n._id === state.note.selectedNoteId
  );
  return note[0];
};

// export const getUserCharacter = () => {
//   createSelector(
//     (state) => state.characters.charactersList,
//     (state) => state.user.informations.characters,
//     (charactersList, userCharacters) => {
//       return userCharacters;
//       //   return charactersList.filter(
//       //     (characters) => characters._id === userCharacters[characters._id]
//       //   );
//     }
//   );
// };

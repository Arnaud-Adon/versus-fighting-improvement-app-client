import { createSelector } from "reselect";

export const getUser = (state) => state.user.infos;
export const getCharacters = (state) => state.character.characters;

const getUserCharactersId = (state) => {
  return state.user.infos.characters?.map((c) => c.characterId);
};

export const getUserCharacters = createSelector(
  [getUserCharactersId, getCharacters],
  (userCharacterId, characters) =>
    characters.filter((c) => userCharacterId.includes(c._id))
);

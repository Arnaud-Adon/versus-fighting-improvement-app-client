import { actionTypes as types } from "./ActionTypes";

export const fetchCharacters = () => {
  return {
    type: types.FETCH_CHARACTERS,
  };
};

export const setCharacters = (characters) => {
  return {
    type: types.SET_CHARACTERS,
    payload: characters,
  };
};

export const addCharacter = ({ userId, characterId }) => {
  return {
    type: types.ADD_CHARACTER,
    payload: {
      userId,
      characterId,
    },
  };
};

export const signUp = (value) => {
  return {
    type: types.SIGN_UP,
    payload: value,
  };
};

export const signIn = (value) => {
  return {
    type: types.SIGN_IN,
    payload: value,
  };
};

export const fetchUser = (user) => {
  return {
    type: types.FETCH_USER,
    payload: user,
  };
};

export const fetchFailure = (error) => {
  return {
    type: types.FETCH_FAILURE,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
    payload: null,
  };
};

export const getNotes = (notes) => {
  return {
    type: types.GET_NOTES,
    payload: notes,
  };
};

export const addNote = (note) => {
  return {
    type: types.ADD_NOTE,
    payload: note,
  };
};

export const updateNote = (note) => {
  return {
    type: types.UPDATE_NOTE,
    payload: note,
  };
};

export const deleteNote = (note) => {
  return {
    type: types.DELETE_NOTE,
    payload: note,
  };
};

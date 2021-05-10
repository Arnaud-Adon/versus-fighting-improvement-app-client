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

// export const logout = () => async (dispatch) => {
//   dispatch(logoutUser());
//   dispatch(setAuth(false));
//   await AsyncStorage.removeItem("token");
//   RootNavigation.navigate("Login");
// };

// export const register = (body) => (dispatch) => {
//   addUser(body)
//     .then(({ user, token }) => {
//       dispatch(setAuth(true));
//       dispatch(setUser(user));
//       setToken(token);
//       RootNavigation.navigate("SelectCharacter");
//     })
//     .catch((message) => dispatch(parseError(message)));
// };

// export const login = (body) => (dispatch) => {
//   getUser(body)
//     .then(({ user, token }) => {
//       dispatch(setAuth(true));
//       dispatch(setUser(user));
//       setToken(token);
//       if (user?.characters.length > 0) {
//         RootNavigation.navigate("Improve");
//       } else {
//         RootNavigation.navigate("SelectCharacter");
//       }
//     })
//     .catch((message) => dispatch(parseError(message)));
// };

// export const addUserCharacter = (body) => (dispatch) => {
//   addCharacterToUser(body)
//     .then((user) => {
//       dispatch(setUser(user));
//       RootNavigation.navigate("Improve");
//     })
//     .catch((message) => dispatch(parseError(message)));
// };

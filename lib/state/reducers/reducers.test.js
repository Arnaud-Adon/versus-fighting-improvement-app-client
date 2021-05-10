import { addUserCharacterResponse } from "../../../dto/addUserCharacter.dto";
import { characterResponse } from "../../../dto/characters-service.dto";
import { Status } from "../../utils/types/status";
import {
  fetchFailure,
  fetchUser,
  logout,
  setCharacters,
  signIn,
  signUp,
} from "../actions";
import characterReducer from "./characterReducer";
import userReducer from "./userReducer";

describe("Store reducers test suite", () => {
  describe("character reducer", () => {
    const initialState = {
      characters: [],
    };

    const mockCharacters = [...characterResponse.characters];
    it("Should handle setCharacters action", () => {
      const state = characterReducer(undefined, setCharacters(mockCharacters));
      expect(state).toEqual({ characters: mockCharacters });
    });
  });

  describe("user reducer", () => {
    const initialState = {
      status: Status.START,
      infos: {},
      error: "",
    };

    const mockUser = {
      username: "mock-username",
      email: "mock-email",
      birthdayDate: new Date(),
      country: "France",
      password: "mock-password",
      characters: [],
    };
    it("Should return initialState", () => {
      const state = userReducer(undefined, { type: "@@INIT" });
      expect(state).toEqual(initialState);
    });

    it("Should handle userSignUn action", () => {
      const state = userReducer(undefined, fetchUser(mockUser));
      expect(state).toEqual({
        infos: mockUser,
        status: Status.SUCCESS,
        error: "",
      });
    });

    it("Should handle fetchUser action", () => {
      const state = userReducer(
        undefined,
        fetchUser(addUserCharacterResponse.user)
      );
      expect(state).toEqual({
        status: Status.SUCCESS,
        infos: addUserCharacterResponse.user,
        error: "",
      });
    });

    it("Should handle fetchFailure action", () => {
      const state = userReducer(undefined, fetchFailure("mock-error"));
      expect(state).toEqual({
        status: Status.FAILURE,
        error: "mock-error",
        infos: {},
      });
    });

    it("Should handle logout action", () => {
      const state = userReducer({ infos: mockUser }, logout());
      expect(state).toEqual(initialState);
    });

    it("Should handle signUp action", () => {
      const state = userReducer(undefined, signUp(mockUser));
      expect(state).toEqual({ status: Status.LOADING, error: "", infos: {} });
    });

    it("Should handle signIn action", () => {
      const state = userReducer(undefined, signIn(mockUser));
      expect(state).toEqual({ status: Status.LOADING, error: "", infos: {} });
    });
  });
});

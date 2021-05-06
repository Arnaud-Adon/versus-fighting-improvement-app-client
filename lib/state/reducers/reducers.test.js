import { characterResponse } from "../../../dto/characters-service.dto";
import { fetchFailure, fetchUser, logout, setCharacters } from "../actions";
import characterReducer from "./characterReducer";
import errorReducer from "./errorReducer";
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
      infos: {},
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

    it("Should handle userSignIn action", () => {
      const state = userReducer(undefined, fetchUser(mockUser));
      expect(state).toEqual({ infos: mockUser });
    });

    it("Should handle logout action", () => {
      const state = userReducer({ infos: mockUser }, logout());
      expect(state).toEqual({ infos: {} });
    });
  });

  describe("error reducer", () => {
    it("Should handle fetchFailure action", () => {
      const state = errorReducer(undefined, fetchFailure("mock-error"));
      expect(state).toEqual({ error: "mock-error" });
    });
  });
});

import { addUserCharacterResponse } from "../../../dto/addUserCharacter.dto";
import { characterResponse } from "../../../dto/characters-service.dto";
import { userResponse } from "../../../dto/user.dto";
import ApiService from "../../service";
import { recordSaga } from "../../utils/test/test.utils";
import {
  fetchCharacters,
  fetchFailure,
  fetchUser,
  setCharacters,
  signUp,
} from "../actions";
import { getCharactersWorker } from "./characterSaga";
import { userRegisterWorker } from "./userSaga";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe("Saga test suite", () => {
  describe("character saga", () => {
    it("Should call fetchCharacters API and dispatch setCharacters action when successful", async () => {
      jest
        .spyOn(ApiService, "getCharacters")
        .mockResolvedValueOnce(characterResponse.characters);

      const dispatched = await recordSaga(getCharactersWorker, fetchCharacters);
      expect(dispatched).toStrictEqual([
        setCharacters(characterResponse.characters),
      ]);
    });

    it("Should call fetchCharacters API and dispatch failure action when unsuccessful", async () => {
      jest
        .spyOn(ApiService, "getCharacters")
        .mockRejectedValueOnce(new Error("mock-error"));

      const dispatched = await recordSaga(getCharactersWorker, fetchCharacters);
      expect(dispatched).toStrictEqual([fetchFailure(new Error("mock-error"))]);
    });
  });

  describe("user saga", () => {
    const mockDataUser = {
      username: "mock-username",
      email: "mock-email",
      birthdayDate: "mock-birthdayDate",
      country: "mock-country",
      password: "mock-password",
    };
    it("Should call signUp API and dispatch fetchUser action when successful ", async () => {
      jest
        .spyOn(ApiService, "userRegister")
        .mockResolvedValueOnce(userResponse);

      const dispatched = await recordSaga(
        userRegisterWorker,
        signUp(mockDataUser)
      );
      expect(dispatched).toStrictEqual([fetchUser(userResponse.user)]);
      expect(mockNavigate).toHaveBeenCalled();
    });

    it("Should call signUp API and dispatch fetchFailure when unsuccessful", async () => {
      jest
        .spyOn(ApiService, "userRegister")
        .mockRejectedValueOnce(new Error("mock-error"));

      const dispatched = await recordSaga(
        userRegisterWorker,
        signUp(mockDataUser)
      );

      expect(dispatched).toStrictEqual([fetchFailure(new Error("mock-error"))]);
    });
  });
});

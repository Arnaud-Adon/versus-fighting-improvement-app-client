import { characterResponse } from "../../../dto/characters-service.dto";
import { userResponse } from "../../../dto/user.dto";
import ApiService from "../../service";
import { recordSaga } from "../../utils/test/test.utils";
import {
  addCharacter,
  fetchCharacters,
  fetchFailure,
  fetchUser,
  logout,
  setCharacters,
  signIn,
  signUp,
} from "../actions";
import { getCharactersWorker } from "./characterSaga";
import {
  userCharacterWorker,
  userConnectWorker,
  userLogoutWorker,
  userRegisterWorker,
} from "./userSaga";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addUserCharacterResponse } from "../../../dto/addUserCharacter.dto";

const mockNavigate = jest.fn();

jest.mock("../../utils/navigation/rootNavigation", () => {
  return {
    ...jest.requireActual("../../utils/navigation/rootNavigation"),
    navigate: (name, params) => mockNavigate(name, params),
  };
});

describe("Saga test suite", () => {
  beforeEach(() => jest.clearAllMocks());
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
      email: "mock@email.com",
      birthdayDate: "mock-birthdayDate",
      country: "mock-country",
      password: "mock-password",
    };

    const userResponseWithCharacterData = {
      user: {
        ...userResponse.user,
        characters: [
          {
            characterId: "5fd4be5bd99c4a2077f62013",
            fightNumber: 0,
            victoryNumber: 0,
            defeatNumber: 0,
            createdAt: "2020-12-23T20:40:02.342+00:00",
            updatedAt: "2020-12-23T20:40:02.342+00:00",
          },
        ],
      },
      token: userResponse.token,
    };
    describe("user register worker", () => {
      it("Should call signUp API and dispatch fetchUser action, set token AsyncStorage and redirect to SelectScreen when successful", async () => {
        jest
          .spyOn(ApiService, "userRegister")
          .mockResolvedValueOnce(userResponse);

        const dispatched = await recordSaga(
          userRegisterWorker,
          signUp(mockDataUser)
        );
        expect(dispatched).toStrictEqual([fetchUser(userResponse.user)]);
        expect(AsyncStorage.setItem).toHaveBeenCalledWith(
          "token",
          JSON.stringify(userResponse.token)
        );
        expect(mockNavigate).toHaveBeenCalledWith("SelectCharacter", undefined);
      });

      it("Should call signUp API and dispatch fetchFailure when unsuccessful", async () => {
        jest
          .spyOn(ApiService, "userRegister")
          .mockRejectedValueOnce("mock-error");

        const dispatched = await recordSaga(
          userRegisterWorker,
          signUp(mockDataUser)
        );

        expect(dispatched).toStrictEqual([fetchFailure("mock-error")]);
      });
    });

    describe("user connect worker", () => {
      it("Should call userRegister API and dispatch fetchUser, set token AsyncStorage and redirect to selectCharacterScreen when successful and user doesn't have any character ", async () => {
        jest
          .spyOn(ApiService, "userConnect")
          .mockResolvedValueOnce(userResponse);
        const dispatched = await recordSaga(
          userConnectWorker,
          signIn(mockDataUser)
        );
        expect(dispatched).toStrictEqual([fetchUser(userResponse.user)]);
        expect(AsyncStorage.setItem).toHaveBeenCalledWith(
          "token",
          JSON.stringify(userResponse.token)
        );
        expect(mockNavigate).toHaveBeenCalledWith("SelectCharacter", undefined);
      });

      it("Should call userRegister API and dispatch fetchUser, set token AsyncStorage and redirect to selectCharacterScreen when successful and user have characters ", async () => {
        jest
          .spyOn(ApiService, "userConnect")
          .mockResolvedValueOnce(userResponseWithCharacterData);
        const dispatched = await recordSaga(
          userConnectWorker,
          signIn(mockDataUser)
        );
        expect(dispatched).toStrictEqual([
          fetchUser(userResponseWithCharacterData.user),
        ]);
        expect(AsyncStorage.setItem).toHaveBeenCalledWith(
          "token",
          JSON.stringify(userResponseWithCharacterData.token)
        );
        expect(mockNavigate).toHaveBeenCalledWith("Improve", undefined);
      });

      it("Should dispatch fetchFailure when call userConnect is unsuccessful", async () => {
        jest
          .spyOn(ApiService, "userConnect")
          .mockRejectedValueOnce("mock-error");
        const dispatched = await recordSaga(
          userConnectWorker,
          signIn(mockDataUser)
        );
        expect(dispatched).toStrictEqual([fetchFailure("mock-error")]);
      });

      it("Should remove token AsyncStorage and redirect to LoginScreen", async () => {
        const dispatched = await recordSaga(userLogoutWorker, logout());
        expect(AsyncStorage.removeItem).toHaveBeenCalledWith("token");
        expect(mockNavigate).toHaveBeenCalledWith("Login", undefined);
      });

      describe("user character worker", () => {
        const data = { userId: 1, characterId: 1 };
        it("Should dispatch addCharacter and redirect to ImproveScreen", async () => {
          jest
            .spyOn(ApiService, "addUserCharacter")
            .mockResolvedValueOnce(addUserCharacterResponse.user);
          const dispatched = await recordSaga(
            userCharacterWorker,
            addCharacter(data)
          );

          expect(dispatched).toStrictEqual([
            fetchUser(addUserCharacterResponse.user),
          ]);
          expect(mockNavigate).toHaveBeenCalledWith("Improve", undefined);
        });

        it("Should dispatch fetchFailure when addUserCharacter service is unsuccessful", async () => {
          jest
            .spyOn(ApiService, "addUserCharacter")
            .mockRejectedValueOnce("mock-error");

          const dispatched = await recordSaga(
            userCharacterWorker,
            addCharacter(data)
          );
          expect(dispatched).toStrictEqual([fetchFailure("mock-error")]);
        });
      });
    });
  });
});

import nock from "nock";
import ApiService from ".";
import { addUserCharacterResponse } from "../../dto/addUserCharacter.dto";
import { characterResponse } from "../../dto/characters-service.dto";
import { userResponse } from "../../dto/user.dto";

describe("Service test suite", () => {
  describe("characters", () => {
    const mockCharacterResponse = { ...characterResponse };

    it("Should return formatted characters from API", async () => {
      const expectedCharacters = characterResponse.characters;

      nock("http://localhost:3090/api")
        .get("/character")
        .query(true)
        .reply(200, mockCharacterResponse);

      const characters = await ApiService.getCharacters();
      expect(characters).toEqual(expectedCharacters);
    });
  });

  describe("user", () => {
    const mockUserRegisterData = {
      username: "mock-username",
      email: "mock-email",
      birthdayDate: "mock-birthdayDate",
      country: "mock-country",
      password: "mock-password",
    };
    const mockUserConnectData = {
      username: "mock-username",
      password: "mock-password",
    };
    it("Should return user after be register", async () => {
      const expectedUser = userResponse;
      nock("http://localhost:3090/api")
        .post("/user/signup")
        .query(true)
        .reply(200, userResponse);
      const user = await ApiService.userRegister(mockUserRegisterData);
      expect(user).toEqual(expectedUser);
    });

    it("Should return user object after user connect", async () => {
      const expectedUser = userResponse;
      nock("http://localhost:3090/api")
        .post("/user/signin")
        .query(true)
        .reply(200, userResponse);
      const user = await ApiService.userConnect(mockUserConnectData);
      expect(user).toEqual(expectedUser);
    });
  });
});

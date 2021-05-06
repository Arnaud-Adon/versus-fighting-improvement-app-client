import nock from "nock";
import ApiService from ".";
import { addUserCharacterResponse } from "../../dto/addUserCharacter.dto";
import { characterResponse } from "../../dto/characters-service.dto";

describe("Service test suite", () => {
  describe("character service", () => {
    const mockCharacterResponse = { ...characterResponse };
    const mockUserResponse = { ...addUserCharacterResponse };

    it("Should return formatted characters from API", async () => {
      const expectedCharacters = characterResponse.characters;

      nock("http://localhost:3090/api")
        .get("/characters")
        .query(true)
        .reply(200, mockCharacterResponse);

      const characters = await ApiService.getCharacters();
      expect(characters).toEqual(expectedCharacters);
    });

    it('("Should return error from API")', async () => {
      nock("http://localhost:3090/api")
        .get("/characters")
        .query(true)
        .reply(400, mockUserResponse);
    });
  });

  //   it("Should return user when user character is added", async () => {
  //     const data = { user_id: 1, characterId: 1 };
  //     const expectedUser = {
  //       ...addUserCharacterResponse,
  //     };

  //     nock("http://localhost:3090/api")
  //       .post("/add-character", data)
  //       .query(true)
  //       .reply(200, mockUserResponse);

  //     const user = await Service.addUserCharacter(data);
  //     expect(user).toEqual(expectedUser);
  //   });
});

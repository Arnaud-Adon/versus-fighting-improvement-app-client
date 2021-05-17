import api from "./axios";

class ApiService {
  static async getCharacters() {
    return new Promise((onSuccess, onFail) => {
      api
        .get("/characters")
        .then(({ data }, error) => {
          if (!data || error) {
            return onFail(error);
          }
          return onSuccess(data?.characters);
        })
        .catch((error) => onFail(error?.response.data.message));
    });
  }

  static async userRegister(body) {
    return new Promise((onSuccess, onFail) => {
      api
        .post("/signup", body)
        .then(({ data }, error) => {
          if (!data || error) {
            return onFail(error?.response.data.message);
          }
          return onSuccess(data);
        })
        .catch((error) => onFail(error?.response.data.message));
    });
  }

  static async userConnect(body) {
    return new Promise((onSuccess, onFail) => {
      api
        .post("/signin", body)
        .then(({ data }, error) => {
          if (!data || error) {
            return onFail(error?.response.data.message);
          }
          return onSuccess(data);
        })
        .catch((error) => onFail(error?.response.data.message));
    });
  }

  static async addUserCharacter(body) {
    return new Promise((onSuccess, onFail) => {
      api
        .post("/add-character", body)
        .then(({ data }, error) => {
          if (!data || error) return onFail(error?.response.data.message);
          return onSuccess(data);
        })
        .catch((error) => onFail(error?.response.data.message));
    });
  }
}

export default ApiService;

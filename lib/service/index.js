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

  static async userRegister(data) {
    return new Promise((onSuccess, onFail) => {
      api
        .post("/signup", data)
        .then(({ data }, error) => {
          if (!data || error) {
            return onFail(error?.response.data.message);
          }
          console.log(data);
          return onSuccess(data);
        })
        .catch((error) => onFail(error?.response.data.message));
    });
  }
}

export default ApiService;

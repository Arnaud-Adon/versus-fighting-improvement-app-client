import api from "./axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToken = async (value) => {
  await AsyncStorage.setItem("token", JSON.stringify(value));
};

export const addUser = (data) => {
  return new Promise((onSuccess, onFail) => {
    api
      .post("/signup", data)
      .then((response, error) => {
        if (!response || error) {
          return onFail(error?.response.data.message);
        }
        return onSuccess(response);
      })
      .catch((error) => onFail(error?.response.data.message));
  });
};

export const getUser = (data) => {
  return new Promise((onSuccess, onFail) => {
    api
      .post("/signin", data)
      .then((response, error) => {
        if (!response || error) {
          return onFail(error?.response.data.message);
        }
        return onSuccess(response);
      })
      .catch((error) => onFail(error?.response.data.message));
  });
};

export const getCharacters = () => {
  return new Promise((onSuccess, onFail) => {
    api
      .get("/characters")
      .then((response, error) => {
        if (!response || error) {
          return onFail(error);
        }
        return onSuccess(response?.data.characters);
      })
      .catch((error) => onFail(error?.response.data.message));
  });
};

export const addUserCharacter = (data) => {
  return new Promise(async (onSuccess, onFail) => {
    const token = await AsyncStorage.getItem("token");
    api
      .post("/add-character", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response, error) => {
        if (!response || error) {
          return onFail(error);
        }
        return onSuccess(response?.data.user);
      })
      .catch((error) => onFail(error?.response.data.message));
  });
};

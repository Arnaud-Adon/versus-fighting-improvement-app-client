import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useMemo, useCallback } from "react";
import { fetchCharacters, parseError } from "../state/actions";
import { store } from "../state/store";
import { loadConfiguration } from "../utils/fonts";

const useSetting = () => {
  const [loading, setLoading] = useState(true);

  const load = useCallback(() => {
    try {
      setTimeout(() => {
        loadConfiguration();
        store.dispatch(fetchCharacters());
        setLoading(false);
      }, 2000);
    } catch (error) {
      store.dispatch(parseError("Problème de chargement de la configuration"));
      setLoading(false);
    }
  }, []);

  const initialScreen = useMemo(async () => {
    // return (await AsyncStorage.getItem("token")) ? "Improve" : "Login";
    return "Login";
  }, []);

  return {
    initialScreen,
    loading,
    load,
  };
};

export default useSetting;

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useMemo, useCallback } from "react";
import { loadFonts } from "../utils/fonts";

const useSetting = () => {
  const [loading, setLoading] = useState(true);
  const loadConfiguration = () => {
    loadFonts().then(() => {
      setLoading(false);
    });
  };

  // const initialScreen = useMemo(async () => {
  //   // return (await AsyncStorage.getItem("token")) ? "Improve" : "Login";
  //   return "Login";
  // }, []);

  return {
    // initialScreen,
    loading,
    loadConfiguration,
  };
};

export default useSetting;

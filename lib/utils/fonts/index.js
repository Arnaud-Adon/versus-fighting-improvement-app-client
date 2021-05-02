import { loadAsync } from "expo-font";

export const loadFonts = async () => {
  await loadAsync({
    LockerliOne: require("../../../assets/fonts/LeckerliOne-Regular.ttf"),
    Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
};

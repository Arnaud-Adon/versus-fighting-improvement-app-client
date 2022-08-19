import { loadAsync } from 'expo-font';

export const loadFonts = async (): Promise<void> => {
  await loadAsync({
    LockerliOne: require('../../assets/fonts/Leckerli-One-Regular.ttf'),
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
  });
};

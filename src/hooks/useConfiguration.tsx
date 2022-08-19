import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { loadFonts } from '../utils/fonts';

const useConfiguration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadConfiguration = async (): Promise<void> => {
    try {
      await loadFonts();
    } catch (error) {
      throw new Error(`Cannot load configuration : ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const isTokenExist = async (): Promise<boolean> =>
    await !!AsyncStorage.getItem('token');

  return {
    isLoading,
    isTokenExist,
    loadConfiguration,
  };
};

export default useConfiguration;

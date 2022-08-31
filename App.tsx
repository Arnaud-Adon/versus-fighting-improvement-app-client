import React, { ReactElement, useEffect } from 'react';
import useConfiguration from './src/hooks/useConfiguration';
import AppNavigator from './src/navigator';
import Loading from './src/components/Loading';
import { Text, View } from 'react-native';

export default function App(): ReactElement {
  const { isLoading, loadConfiguration, isTokenExist } = useConfiguration();

  useEffect(() => {
    loadConfiguration();
  }, []);

  const isUserConnected = isTokenExist();

  return isLoading ? <Loading /> : <AppNavigator />;
}

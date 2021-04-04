import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./lib/state/store";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./lib/utils/navigation/rootNavigation";
import useSetting from "./lib/hooks/useSetting";

import Loading from "./components/Loading/Loading";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const { initialScreen, loading, load } = useSetting();

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

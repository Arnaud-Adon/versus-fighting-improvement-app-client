import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./lib/state/store";
import useSetting from "./lib/hooks/useSetting";
import Loading from "./components/Loading/Loading";
import AppNavigator from "./navigation/AppNavigator";
import CharacterProvider from "./lib/hooks/useCharacter";

export default function App() {
  const { loading, loadConfiguration } = useSetting();

  useEffect(() => {
    loadConfiguration();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Provider store={store}>
        <CharacterProvider characters={store.getState().character.characters}>
          <AppNavigator />
        </CharacterProvider>
      </Provider>
    );
  }
}

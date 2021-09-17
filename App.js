import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./lib/state/store";
import useSetting from "./lib/hooks/useSetting";
import Loading from "./components/Loading/Loading";
import AppNavigator from "./navigation/AppNavigator";
import { fetchCharacters } from "./lib/state/actions";
import { SelectCharacterProvider } from "./lib/context/selectCharacterContext";

export default function App() {
  const { loading, loadConfiguration } = useSetting();

  useEffect(() => {
    store.dispatch(fetchCharacters());
    loadConfiguration();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Provider store={store}>
        <SelectCharacterProvider>
          <AppNavigator />
        </SelectCharacterProvider>
      </Provider>
    );
  }
}

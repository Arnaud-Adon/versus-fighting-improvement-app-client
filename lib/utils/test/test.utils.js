import React from "react";
import { render as rtlRender } from "@testing-library/react-native";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../../state/reducers";
import { Provider } from "react-redux";
import { runSaga } from "@redux-saga/core";

const store = createStore(rootReducer);

export const mockStore = (interceptor) => {
  const logger = () => (next) => (action) => {
    interceptor?.(action);
    return next(action);
  };
  return createStore(rootReducer, undefined, applyMiddleware(logger));
};

export async function recordSaga(worker, initialAction) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    worker,
    initialAction
  ).toPromise();
  return dispatched;
}

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react-native";
export { render };

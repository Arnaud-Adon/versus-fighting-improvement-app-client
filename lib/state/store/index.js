import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import characterSaga from "../saga/characterSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(characterSaga);

export default store;

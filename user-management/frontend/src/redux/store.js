import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from './user';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import userSaga from "./user/saga";

const reducers = combineReducers({
  users: userReducer
});

function* rootSaga() {
  yield all([userSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default store;
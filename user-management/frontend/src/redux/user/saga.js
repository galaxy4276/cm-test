import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILURE,
} from "./index";
import * as userAPI from '../../api/userAPI';


// Saga 함수
function* addUserSaga({ payload }) {
  try {
    const result = yield call(userAPI.addUserToJSON, payload);
    console.error(result);
    yield put({
      type: ADD_USER_SUCCESS,
      payload: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_USER_FAILURE,
      payload: e.response.data
    });
  }
}
function* getUsersSaga() {
  try {
    const result = yield call(userAPI.getUserFromJSON);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: JSON.parse(result.data)
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_USERS_FAILURE,
      payload: e.response.data
    });
  }
}
function* deleteUsersSaga({ payload }) {
  try {
    console.log('payload: ', payload);
    yield call(userAPI.deleteUsersFromJSON, payload);
    yield put({
      type: DELETE_USERS_SUCCESS,
    });
    yield put({
      type: GET_USERS_REQUEST
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: DELETE_USERS_FAILURE,
      payload: e.response.data
    });
  }
}


// Watch 함수
function* watchAddUser() {
  yield takeLatest(ADD_USER_REQUEST, addUserSaga);
}
function* watchGetUsers() {
  yield takeLatest(GET_USERS_REQUEST, getUsersSaga);
}
function* watchDeleteUsers() {
  yield takeLatest(DELETE_USERS_REQUEST, deleteUsersSaga);
}


// root 함수
function* userSaga() {
  yield all([
    watchAddUser(),
    watchGetUsers(),
  ]);
}

export default userSaga;
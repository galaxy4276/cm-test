import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./index";
import * as userAPI from '../../api/userAPI';


// Saga 함수
function* addUserSaga(action) {
  try {
    console.log(action);
    const result = yield call(userAPI.addUserToJSON, action.payload);
    console.log(result);
    yield put({
      type: ADD_USER_SUCCESS,
      payload: result.data
    });
  } catch (e) {
    console.log(e);
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
      payload: e
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


// root 함수
function* userSaga() {
  yield all([
    watchAddUser(),
    watchGetUsers(),
  ]);
}

export default userSaga;
import {createAction, handleActions} from "redux-actions";


// 액션
export const GET_USERS_REQUEST = 'user/GET_USER_REQUEST';
export const GET_USERS_SUCCESS = 'user/GET_USER_SUCCESS';
export const GET_USERS_FAILURE = 'user/GET_USER_FAILURE';
export const ADD_USER_REQUEST = 'user/ADD_USER';
export const ADD_USER_SUCCESS = 'user/ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'user/ADD_USER_FAILURE';
export const INPUT_USERNAME = 'user/INPUT_USERNAME';
export const INPUT_ROLE = 'user/INPUT_ROLE';
export const DELETE_USERS_REQUEST = 'user/DELETE_USER_REQUEST';
export const DELETE_USERS_SUCCESS = 'user/DELETE_USER_SUCCESS';
export const DELETE_USERS_FAILURE = 'user/DELETE_USER_FAILURE';


// 액션 함수
export const getUsers = createAction(GET_USERS_REQUEST);
export const addUser = createAction(ADD_USER_REQUEST, user => user);
export const inputUsername = createAction(
  INPUT_USERNAME, input => input
);
export const inputRole = createAction(
  INPUT_ROLE, role => role
);
export const deleteUsers = createAction(
  DELETE_USERS_REQUEST,
    id => id
);


// 상태 값
const INITIAL_STATE = {
  users: [],
  username: '',
  role: '개발자',


  // 사용자 추가 관련 상태 값
  addUserLoading: false,
  addUserError: null,

  getUserLoading: false,
  getUserError: null,

  deleteUserLoading: false,
  deleteUserError: null,
};


// 리듀서
const reducer = handleActions(
  {
    [INPUT_USERNAME]: (state, { payload: username }) => ({
      ...state,
      username,
    }),
    [INPUT_ROLE]: (state, { payload: role }) => ({
      ...state,
      role
    }),

    [GET_USERS_REQUEST]: state => ({
      ...state,
      getUserLoading: true,
    }),
    [GET_USERS_SUCCESS]: (state, { payload: users }) => ({
      ...state,
      getUserError: null,
      getUserLoading: false,
      users,
    }),
    [GET_USERS_FAILURE]: (state, { payload: getUserError }) => ({
      ...state,
      getUserError,
      getUserLoading: false,
    }),

    [ADD_USER_REQUEST]: (state, {payload: user }) => ({
      ...state,
      addUserLoading: true,
    }),
    [ADD_USER_FAILURE]: (state, { payload: addUserError }) => ({
      ...state,
      addUserLoading: false,
      addUserError,
    }),
    [ADD_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      addUserError: null,
      addUserLoading: false,
      users: state.users.concat(user)
    }),

    [DELETE_USERS_REQUEST]: state => ({
      ...state,
      deleteUserLoading: true,
    }),
    [DELETE_USERS_SUCCESS]: state => ({
      ...state,
      deleteUserLoading: false,
      deleteUserError: null,
    }),
    [DELETE_USERS_FAILURE]: (state, { payload: deleteUserError }) => ({
      ...state,
      deleteUserError,
      deleteUserLoading: false,
    }),
  },
  INITIAL_STATE
);

export default reducer;
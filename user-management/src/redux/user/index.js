import {createAction, handleActions} from "redux-actions";
import db from '../../data/db.json';

// 액션
const GET_USERS = 'user/GET_USER';
const ADD_USER = 'user/ADD_USER';
const INPUT_USERNAME = 'user/INPUT_USERNAME';
const INPUT_ROLE = 'user/INPUT_ROLE';


// 액션 함수
export const getUsers = createAction(GET_USERS);
export const addUser = createAction(ADD_USER, user => user);
export const inputUsername = createAction(
  INPUT_USERNAME, input => input
);
export const inputRole = createAction(
  INPUT_ROLE, role => role
);


// 상태 값
const INITIAL_STATE = {
  users: [],
  username: '',
  role: '',
}


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
    [GET_USERS]: state => ({
      ...state,
      users: db
    }),
    [ADD_USER]: (state, {payload: user}) => ({
      ...state,
      users: state.users.concat(user)
    }),
  },
  INITIAL_STATE
);

export default reducer;
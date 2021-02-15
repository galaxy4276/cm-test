import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from './user';


const reducers = combineReducers({
  users: userReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;
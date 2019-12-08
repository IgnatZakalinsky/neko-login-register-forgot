import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    signIn: (s = {}) => s,
    register: (s = {}) => s,
    forgot: (s = {}) => s,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// window.store = store;

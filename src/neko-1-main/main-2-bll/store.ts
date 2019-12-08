import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../neko-2-sign-in/sign-in-2-bll/signInReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: (s = {}) => s,
    forgot: (s = {}) => s,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// window.store = store;

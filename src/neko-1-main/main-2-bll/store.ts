import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../neko-2-sign-in/sign-in-2-bll/signInReducer";
import {registerReducer} from "../../neko-3-register/register-2-bll/registerReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: (s = {}) => s,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// window.store = store;

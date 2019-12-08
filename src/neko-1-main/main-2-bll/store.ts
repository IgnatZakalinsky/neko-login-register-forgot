import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    signIn: () => {},
    register: () => {},
    forgot: () => {},
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// window.store = store;

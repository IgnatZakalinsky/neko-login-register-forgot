import {signInInitialState} from "./signInInitialState";
import {ISignInActions, SIGN_IN_LOADING, SIGN_IN_SET_EMAIL, SIGN_IN_SET_PASSWORD} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case SIGN_IN_SET_EMAIL: {
            return {
                ...state,
                email: action.email,
            }
        }
        case SIGN_IN_SET_PASSWORD: {
            return {
                ...state,
                password: action.password,
            }
        }
        case SIGN_IN_LOADING: {
            return {
                ...state,
                loading: action.loading,
            }
        }

        default: {
            return state;
        }
    }
};

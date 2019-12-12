import {signInInitialState} from "./signInInitialState";
import {
    ISignInActions, SIGN_IN_ERROR,
    SIGN_IN_LOADING, SIGN_IN_REMEMBER_ME,
    SIGN_IN_SET_EMAIL,
    SIGN_IN_SET_PASSWORD,
    SIGN_IN_SUCCESS
} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case SIGN_IN_SET_EMAIL: {
            return {
                ...state,
                email: action.email,
                error: '',
                success: false,
            }
        }
        case SIGN_IN_SET_PASSWORD: {
            return {
                ...state,
                password: action.password,
                error: '',
                success: false,
            }
        }
        case SIGN_IN_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: action.success,
                error: '',
            }
        }
        case SIGN_IN_ERROR: {
            return {
                ...state,
                loading: false,
                success: false,
                error: action.error,
            }
        }
        case SIGN_IN_REMEMBER_ME: {
            return {
                ...state,
                loading: false,
                success: false,
                error: '',
                rememberMe: action.rememberMe,
            }
        }

        default: {
            return state;
        }
    }
};

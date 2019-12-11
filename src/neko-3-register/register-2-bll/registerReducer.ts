import {registerInitialState} from "./registerInitialState";
import {
    IRegisterActions, REGISTER_ERROR,
    REGISTER_LOADING,
    REGISTER_SET_EMAIL,
    REGISTER_SET_PASSWORD,
    REGISTER_SET_PASSWORD_2, REGISTER_SUCCESS
} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case REGISTER_SET_EMAIL: {
            return {
                ...state,
                email: action.email,
                error: '',
                success: false,
            }
        }
        case REGISTER_SET_PASSWORD: {
            return {
                ...state,
                password: action.password,
                error: '',
                success: false,
            }
        }
        case REGISTER_SET_PASSWORD_2: {
            return {
                ...state,
                password2: action.password2,
                error: '',
                success: false,
            }
        }
        case REGISTER_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: action.success,
                error: '',
            }
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                loading: false,
                success: false,
                error: action.error,
            }
        }

        default: {
            return state;
        }
    }
};

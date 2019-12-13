import {registerInitialState} from "./registerInitialState";
import {
    IRegisterActions, REGISTER_ERROR,
    REGISTER_LOADING, REGISTER_SUCCESS
} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
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

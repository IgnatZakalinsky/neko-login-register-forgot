import {forgotInitialState} from "./forgotInitialState";
import {FORGOT_LOADING, FORGOT_SET_EMAIL, IForgotActions} from "./forgotActions";

export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT_SET_EMAIL: {
            return {
                ...state,
                email: action.email,
            }
        }
        case FORGOT_LOADING: {
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

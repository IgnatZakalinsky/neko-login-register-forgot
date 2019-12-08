import {forgotInitialState} from "./forgotInitialState";
import {FORGOT_SET_EMAIL, IForgotActions} from "./forgotActions";

export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT_SET_EMAIL: {
            return {
                ...state,
                email: action.email,
            }
        }
        default: {
            return state;
        }
    }
};

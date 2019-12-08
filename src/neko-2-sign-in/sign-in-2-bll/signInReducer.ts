import {signInInitialState} from "./signInInitialState";
import {ISignInActions, SIGN_IN_SET_EMAIL} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case SIGN_IN_SET_EMAIL: {
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

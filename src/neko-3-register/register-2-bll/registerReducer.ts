import {registerInitialState} from "./registerInitialState";
import {IRegisterActions, REGISTER_SET_EMAIL, REGISTER_SET_PASSWORD, REGISTER_SET_PASSWORD_2} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case REGISTER_SET_EMAIL: {
            return {
                ...state,
                email: action.email,
            }
        }
        case REGISTER_SET_PASSWORD: {
            return {
                ...state,
                password: action.password,
            }
        }
        case REGISTER_SET_PASSWORD_2: {
            return {
                ...state,
                password2: action.password2,
            }
        }

        default: {
            return state;
        }
    }
};

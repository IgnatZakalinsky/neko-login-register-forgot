import {signInInitialState} from "./signInInitialState";

export const signInReducer = (state = signInInitialState, action = {type: 'none'}) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};

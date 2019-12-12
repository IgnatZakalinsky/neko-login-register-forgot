import React from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {signInError, signInSetEmail, signInSetPassword} from "../sign-in-2-bll/signInActions";
import {signIn} from "../sign-in-2-bll/signInThunks";
import {emailValidator} from '../../neko-5-helpers/emailValidator';

const SignInContainer: React.FC = () => {
    const signInState = useSelector((store: IAppStore) => store.signIn);
    const dispatch = useDispatch();
    const signInSetEmailCallback = (email: string) => dispatch(signInSetEmail(email));
    const signInSetPasswordCallback = (password: string) => dispatch(signInSetPassword(password));
    const signInCallback = () => {
        if (emailValidator(signInState.email)) {
            dispatch(signIn());
        } else {
            dispatch(signInError('Email not valid!'));
        }
    };

    return (
        <SignIn
            email={signInState.email}
            password={signInState.password}
            loading={signInState.loading}
            success={signInState.success}
            error={signInState.error}
            signInSetEmailCallback={signInSetEmailCallback}
            signInSetPasswordCallback={signInSetPasswordCallback}
            signInCallback={signInCallback}
        />
    );
};

export default SignInContainer;

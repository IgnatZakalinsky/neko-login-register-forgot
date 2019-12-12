import React, {useEffect} from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {
    signInError,
    signInRememberMe,
    signInSetEmail,
    signInSetPassword
} from "../sign-in-2-bll/signInActions";
import {signIn} from "../sign-in-2-bll/signInThunks";
import {emailValidator} from '../../neko-5-helpers/emailValidator';
import {passwordValidator} from "../../neko-5-helpers/passwordValidator";
import {getMe} from "../../neko-6-neko/neko-2-bll/nekoThunks";

const SignInContainer: React.FC = () => {
    const signInState = useSelector((store: IAppStore) => store.signIn);
    const dispatch = useDispatch();
    const signInSetEmailCallback = (email: string) => dispatch(signInSetEmail(email));
    const signInSetPasswordCallback = (password: string) => dispatch(signInSetPassword(password));
    const signInRememberMeCallback = (saveMe: boolean) => dispatch(signInRememberMe(saveMe));
    const signInCallback = () => {
        if (!emailValidator(signInState.email)) {
            dispatch(signInError('Email not valid!'));
        } else if (!passwordValidator(signInState.password)) {
            dispatch(signInError('Password not valid! must be more than 7 characters...'));
        } else {
            dispatch(signIn());
        }
    };

    useEffect(() => {
        dispatch(getMe());
    }, []);

    return (
        <SignIn
            email={signInState.email}
            password={signInState.password}
            loading={signInState.loading}
            success={signInState.success}
            error={signInState.error}
            rememberMe={signInState.rememberMe}
            signInRememberMeCallback={signInRememberMeCallback}
            signInSetEmailCallback={signInSetEmailCallback}
            signInSetPasswordCallback={signInSetPasswordCallback}
            signInCallback={signInCallback}
        />
    );
};

export default SignInContainer;

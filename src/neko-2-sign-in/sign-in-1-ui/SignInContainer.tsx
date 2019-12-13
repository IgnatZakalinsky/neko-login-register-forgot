import React, {useEffect, useState} from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {
    signInError, signInSuccess
} from "../sign-in-2-bll/signInActions";
import {signIn} from "../sign-in-2-bll/signInThunks";
import {emailValidator} from '../../neko-5-helpers/emailValidator';
import {passwordValidator} from "../../neko-5-helpers/passwordValidator";
import {getMe} from "../../neko-6-neko/neko-2-bll/nekoThunks";
import {Redirect} from "react-router";
import {NEKO_PATH} from "../../neko-1-main/main-1-ui/Routes";

const SignInContainer: React.FC = () => {
    const signInState = useSelector((store: IAppStore) => store.signIn);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('test@emali.nya');
    const [password, setPassword] = useState('test password nya');
    const [rememberMe, setRememberMe] = useState(false);

    const signInCallback = () => {
        if (!emailValidator(email)) {
            dispatch(signInError('Email not valid!'));
        } else if (!passwordValidator(password)) {
            dispatch(signInError('Password not valid! must be more than 7 characters...'));
        } else {
            dispatch(signIn(email, password, rememberMe));
        }
    };

    useEffect(() => {
        dispatch(getMe());
    }, []);

    const [redirect, setRedirect] = useState(false);
    if (signInState.success) {
        setTimeout(() => setRedirect(true), 500)
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(signInSuccess(false))
        }, 500);
        return <Redirect to={NEKO_PATH}/>;
    }

    return (
        <SignIn
            email={email}
            password={password}
            loading={signInState.loading}
            success={signInState.success}
            error={signInState.error}
            rememberMe={rememberMe}
            signInRememberMeCallback={setRememberMe}
            signInSetEmailCallback={setEmail}
            signInSetPasswordCallback={setPassword}
            signInCallback={signInCallback}
        />
    );
};

export default SignInContainer;

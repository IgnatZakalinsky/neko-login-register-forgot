import React from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {signInSetEmail, signInSetPassword} from "../sign-in-2-bll/signInActions";
import {signIn} from "../sign-in-2-bll/signInThunks";

const SignInContainer: React.FC = () => {
    const signInState = useSelector((store: IAppStore) => store.signIn);
    const dispatch = useDispatch();
    const signInSetEmailCallback = (email: string) => dispatch(signInSetEmail(email));
    const signInSetPasswordCallback = (password: string) => dispatch(signInSetPassword(password));
    const signInCallback = () => dispatch(signIn());

    return (
        <SignIn
            email={signInState.email}
            password={signInState.password}
            loading={signInState.loading}
            signInSetEmailCallback={signInSetEmailCallback}
            signInSetPasswordCallback={signInSetPasswordCallback}
            signInCallback={signInCallback}
        />
    );
};

export default SignInContainer;

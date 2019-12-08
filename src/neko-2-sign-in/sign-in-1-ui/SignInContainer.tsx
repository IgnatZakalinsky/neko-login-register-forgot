import React from 'react';
import SignIn from "./SignIn";
import {useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";

const SignInContainer: React.FC = () => {
    const signInState = useSelector((store: IAppStore) => store.signIn);

    return (
        <SignIn email={signInState.email} password={signInState.password}/>
    );
};

export default SignInContainer;

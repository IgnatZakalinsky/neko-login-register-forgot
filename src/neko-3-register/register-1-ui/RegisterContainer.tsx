import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import Register from './Register';
import {
    registerError,
    registerSetEmail,
    registerSetPassword,
    registerSetPassword2
} from "../register-2-bll/registerActions";
import {register} from '../register-2-bll/registerThunks';
import {emailValidator} from "../../neko-5-helpers/emailValidator";
import {passwordValidator} from "../../neko-5-helpers/passwordValidator";

const RegisterContainer: React.FC = () => {
    const registerState = useSelector((store: IAppStore) => store.register);
    const dispatch = useDispatch();
    const registerSetEmailCallback = (email: string) => dispatch(registerSetEmail(email));
    const registerSetPasswordCallback = (password: string) => dispatch(registerSetPassword(password));
    const registerSetPasswordCallback2 = (password: string) => dispatch(registerSetPassword2(password));
    const registerCallback = () => {
        if (!emailValidator(registerState.email)) {
            dispatch(registerError('Email not valid!'));
        } else if (!passwordValidator(registerState.password)) {
            dispatch(registerError('Password not valid! must be more than 7 characters...'));
        } else if (registerState.password !== registerState.password2) {
            dispatch(registerError('Passwords do not match!'));
        } else {
            dispatch(register());
        }
    };

    return (
        <Register
            email={registerState.email}
            password={registerState.password}
            password2={registerState.password2}
            loading={registerState.loading}
            success={registerState.success}
            error={registerState.error}
            registerSetEmailCallback={registerSetEmailCallback}
            registerSetPasswordCallback={registerSetPasswordCallback}
            registerSetPasswordCallback2={registerSetPasswordCallback2}
            registerCallback={registerCallback}
        />
    );
};

export default RegisterContainer;

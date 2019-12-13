import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import Forgot from './Forgot';
import {forgotError, forgotSuccess} from "../forgot-2-bll/forgotActions";
import {forgot} from "../forgot-2-bll/forgotThunks";
import {emailValidator} from "../../neko-5-helpers/emailValidator";
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../neko-1-main/main-1-ui/Routes";

const ForgotContainer: React.FC = () => {
    const forgotState = useSelector((store: IAppStore) => store.forgot);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('test@emali.nya');

    const forgotCallback = () => {
        if (emailValidator(email)) {
            dispatch(forgot(email));
        } else {
            dispatch(forgotError('Email not valid!'));
        }
    };

    const [redirect, setRedirect] = useState(false);
    if (forgotState.success) {
        setTimeout(() => setRedirect(true), 500)
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(forgotSuccess(false))
        }, 500);
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    return (
        <Forgot
            email={email}
            loading={forgotState.loading}
            success={forgotState.success}
            error={forgotState.error}
            forgotSetEmailCallback={setEmail}
            forgotCallback={forgotCallback}
        />
    );
};

export default ForgotContainer;

import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import Forgot from './Forgot';
import {forgotError, forgotSetEmail, forgotSuccess} from "../forgot-2-bll/forgotActions";
import {forgot} from "../forgot-2-bll/forgotThunks";
import {emailValidator} from "../../neko-5-helpers/emailValidator";
import {Redirect} from "react-router";

const ForgotContainer: React.FC = () => {
    const forgotState = useSelector((store: IAppStore) => store.forgot);
    const dispatch = useDispatch();
    const forgotSetEmailCallback = (email: string) => dispatch(forgotSetEmail(email));
    const forgotCallback = () => {
        if (emailValidator(forgotState.email)) {
            dispatch(forgot());
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
        return <Redirect to={'/sign-in'}/>;
    }

    return (
        <Forgot
            email={forgotState.email}
            loading={forgotState.loading}
            success={forgotState.success}
            error={forgotState.error}
            forgotSetEmailCallback={forgotSetEmailCallback}
            forgotCallback={forgotCallback}
        />
    );
};

export default ForgotContainer;

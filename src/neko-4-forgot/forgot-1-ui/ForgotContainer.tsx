import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import Forgot from './Forgot';
import {forgotSetEmail} from "../forgot-2-bll/forgotActions";
import {forgot} from "../forgot-2-bll/forgotThunks";

const ForgotContainer: React.FC = () => {
    const forgotState = useSelector((store: IAppStore) => store.forgot);
    const dispatch = useDispatch();
    const forgotSetEmailCallback = (email: string) => dispatch(forgotSetEmail(email));
    const forgotCallback = () => dispatch(forgot());

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

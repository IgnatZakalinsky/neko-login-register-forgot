import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInPage from '../../neko-2-sign-in/sign-in-1-ui/SignInPage';
import RegisterPage from '../../neko-3-register/register-1-ui/RegisterPage';
import ForgotPage from '../../neko-4-forgot/forgot-1-ui/ForgotPage';
import NekoPage from "../../neko-6-neko/neko-1-ui/NekoPage";

const Routes: React.FC = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <Redirect to={'/sign-in'}/>}/>
            <Route path={'/sign-in'} render={() => <SignInPage/>}/>
            <Route path={'/register'} render={() => <RegisterPage/>}/>
            <Route path={'/forgot'} render={() => <ForgotPage/>}/>
            <Route path={'/neko'} render={() => <NekoPage/>}/>
        </div>
    );
};

export default Routes;

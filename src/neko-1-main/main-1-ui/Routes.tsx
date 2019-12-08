import React from 'react';
import {Redirect, Route} from "react-router";
import SignInPage from '../../neko-2-sign-in/sign-in-1-ui/SignInPage';
import RegisterPage from '../../neko-3-register/register-1-ui/RegisterPage';

const Routes: React.FC = () => {
    return (
        <div>
            <Route path={'/'} render={() => <Redirect to={'/sign-in'}/>}/>
            <Route path={'/sign-in'} render={() => <SignInPage/>}/>
            <Route path={'/register'} render={() => <RegisterPage/>}/>
            <Route path={'/forgot'} render={() => <div>forgot</div>}/>
            <Route path={'/neko'} render={() => <div>neko</div>}/>
        </div>
    );
};

export default Routes;

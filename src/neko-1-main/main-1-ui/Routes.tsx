import React from 'react';
import {Redirect, Route} from "react-router";
import SignInPage from '../../neko-2-sign-in/sign-in-1-ui/SignInPage';

const Routes: React.FC = () => {
    return (
        <div>
            <Route path={'/'} render={() => <Redirect to={'/sign-in'}/>}/>
            <Route path={'/sign-in'} render={() => <SignInPage/>}/>
            <Route path={'/register'} render={() => <div>register</div>}/>
            <Route path={'/forgot'} render={() => <div>forgot</div>}/>
            <Route path={'/neko'} render={() => <div>neko</div>}/>
        </div>
    );
};

export default Routes;

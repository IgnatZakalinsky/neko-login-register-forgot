import React from 'react';
import {Redirect, Route} from "react-router";

const Routes: React.FC = () => {
    return (
        <div>
            <Route path={'/'} render={() => <Redirect to={'/sign-in'}/>}/>
            <Route path={'/sign-in'} render={() => <div>sign-in</div>}/>
            <Route path={'/register'} render={() => <div>register</div>}/>
            <Route path={'/forgot'} render={() => <div>forgot</div>}/>
            <Route path={'/neko'} render={() => <div>neko</div>}/>
        </div>
    );
};

export default Routes;

import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, REGISTER_PATH} from "../../../../neko-1-main/main-1-ui/Routes";

interface SignInProps {
    email: string;
    password: string;
    loading: boolean;
    success: boolean;
    error: string;
    rememberMe: boolean;
    signInRememberMeCallback: (saveMe: boolean) => void;
    signInSetEmailCallback: (email: string) => void;
    signInSetPasswordCallback: (password: string) => void;
    signInCallback: () => void;
}

const SignIn: React.FC<SignInProps> = (
    {
        email,
        password,
        loading,
        success,
        error,
        rememberMe,
        signInRememberMeCallback,
        signInSetEmailCallback,
        signInSetPasswordCallback,
        signInCallback
    }
) => {
    if (typeof error !== 'string') error = JSON.stringify(error);

    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            sign-in
            {loading && <div style={{color: 'orange'}}>loading...</div>}
            {success && <div style={{color: 'lime'}}>Success!</div>}
            {error && <div style={{color: 'red'}}>{error}</div>}
            <div>
                <input value={email} onChange={e => signInSetEmailCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <input value={password} onChange={e => signInSetPasswordCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>
            </div>
            <div>
                <button onClick={signInCallback}>Sign In</button>
            </div>
            <div>
                <input
                    type={'checkbox'}
                    checked={rememberMe}
                    onChange={e => signInRememberMeCallback(e.currentTarget.checked)}
                />
                Remember Me
            </div>
            <div>
                <NavLink to={REGISTER_PATH}>Registration</NavLink>
            </div>
        </div>
    );
};

export default SignIn;

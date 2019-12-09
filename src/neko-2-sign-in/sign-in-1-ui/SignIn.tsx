import React from 'react';

interface SignInProps {
    email: string;
    password: string;
    loading: boolean;
    success: boolean;
    error: string;
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
        signInSetEmailCallback,
        signInSetPasswordCallback,
        signInCallback
    }
) => {
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
            {loading && <div>loading...</div>}
            {success && <div>Success!</div>}
            {error && <div>{error}</div>}
            <div>
                <input value={email} onChange={e => signInSetEmailCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <input value={password} onChange={e => signInSetPasswordCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={signInCallback}>Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;

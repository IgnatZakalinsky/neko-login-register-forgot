import React from 'react';

interface SignInProps {
    email: string;
    password: string;
    signInSetEmailCallback: (email: string) => void;
}

const SignIn: React.FC<SignInProps> = ({email, password, signInSetEmailCallback}) => {
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
            <div>
                <input value={email} onChange={e => signInSetEmailCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <input value={password}/>
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;

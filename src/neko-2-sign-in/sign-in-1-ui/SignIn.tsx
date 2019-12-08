import React from 'react';

const SignIn: React.FC = () => {
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
                <input value={'email'}/>
            </div>
            <div>
                <input value={'password'}/>
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;

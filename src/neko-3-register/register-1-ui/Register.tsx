import React from 'react';

interface RegisterProps {
    email: string;
    password: string;
    password2: string;
    loading: boolean;
    registerSetEmailCallback: (email: string) => void;
    registerSetPasswordCallback: (password: string) => void;
    registerSetPasswordCallback2: (password: string) => void;
    registerCallback: () => void;
}

const Register: React.FC<RegisterProps> = (
    {
        email,
        password,
        password2,
        loading,
        registerSetEmailCallback,
        registerSetPasswordCallback,
        registerSetPasswordCallback2,
        registerCallback
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
            register
            {loading && <div>loading...</div>}
            <div>
                <input value={email} onChange={e => registerSetEmailCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <input value={password} onChange={e => registerSetPasswordCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <input value={password2} onChange={e => registerSetPasswordCallback2(e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={registerCallback}>Register</button>
            </div>
        </div>
    );
};

export default Register;

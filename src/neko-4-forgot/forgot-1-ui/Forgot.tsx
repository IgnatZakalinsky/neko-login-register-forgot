import React from 'react';

interface ForgotProps {
    email: string;
    forgotSetEmailCallback: (email: string) => void;
    forgotCallback: () => void;
}

const Forgot: React.FC<ForgotProps> = (
    {
        email,
        forgotSetEmailCallback,
        forgotCallback
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
            forgot
            <div>
                <input value={email} onChange={e => forgotSetEmailCallback(e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={forgotCallback}>Send email</button>
            </div>
        </div>
    );
};

export default Forgot;

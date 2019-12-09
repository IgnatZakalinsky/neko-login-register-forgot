import React from 'react';

interface ForgotProps {
    email: string;
    loading: boolean;
    forgotSetEmailCallback: (email: string) => void;
    forgotCallback: () => void;
}

const Forgot: React.FC<ForgotProps> = (
    {
        email,
        loading,
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
            {loading && <div>loading...</div>}
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

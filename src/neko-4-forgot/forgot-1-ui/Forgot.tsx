import React from 'react';

interface ForgotProps {
    email: string;
    loading: boolean;
    success: boolean;
    error: string;
    forgotSetEmailCallback: (email: string) => void;
    forgotCallback: () => void;
}

const Forgot: React.FC<ForgotProps> = (
    {
        email,
        loading,
        success,
        error,
        forgotSetEmailCallback,
        forgotCallback
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
            forgot
            {loading && <div>loading...</div>}
            {success && <div>Success!</div>}
            {error && <div>{error}</div>}
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

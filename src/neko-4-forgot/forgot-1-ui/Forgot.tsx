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
            {loading && <div style={{color: 'orange'}}>loading...</div>}
            {success && <div style={{color: 'lime'}}>Success!</div>}
            {error && <div style={{color: 'red'}}>{error}</div>}
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

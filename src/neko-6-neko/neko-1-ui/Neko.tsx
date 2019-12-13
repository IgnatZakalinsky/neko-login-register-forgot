import React from 'react';

interface NekoProps {
    name: string;
    loading: boolean;
    error: string;
    logoutCallback: () => void;
}

const Neko: React.FC<NekoProps> = (
    {
        name,
        loading,
        error,
        logoutCallback,
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
            neko
            {loading && <div style={{color: 'orange'}}>loading...</div>}
            {error && <div style={{color: 'red'}}>{error}</div>}
            {name && <div style={{color: 'lime'}}>{name}</div>}
            <div>
                <button onClick={logoutCallback}>logout</button>
            </div>
        </div>
    );
};

export default Neko;

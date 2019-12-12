import React from 'react';

interface NekoProps {
    name: string;
    logoutCallback: () => void;
}

const Neko: React.FC<NekoProps> = (
    {
        name,
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
            {name && <div style={{color: 'lime'}}>{name}</div>}
            <div>
                <button onClick={logoutCallback}>logout</button>
            </div>
        </div>
    );
};

export default Neko;

import React from 'react';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <NavLink to={'/sign-in'}>sign-in</NavLink>
            <NavLink to={'/register'}>register</NavLink>
            <NavLink to={'/forgot'}>forgot</NavLink>
        </div>
    );
};

export default Header;

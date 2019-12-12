import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, NEKO_PATH, REGISTER_PATH, SIGN_IN_PATH} from './Routes';

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
            <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>
            <NavLink to={REGISTER_PATH}>register</NavLink>
            <NavLink to={FORGOT_PATH}>forgot</NavLink>
            <NavLink to={NEKO_PATH}>neko</NavLink>
        </div>
    );
};

export default Header;

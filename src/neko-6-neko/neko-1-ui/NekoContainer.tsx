import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import Neko from "./Neko";
import {nekoSetName} from "../neko-2-bll/nekoActions";
import {Redirect} from "react-router";
import {getCookie, setCookie} from "../../neko-5-helpers/cookies";

const NekoContainer: React.FC = () => {
    const nekoState = useSelector((store: IAppStore) => store.neko);
    const dispatch = useDispatch();
    const logoutCallback = () => {
        setCookie('token', '', -1000);
        dispatch(nekoSetName(''));
    };

    const [redirect, setRedirect] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);
        else setShow(true);
    }, [nekoState]);
    if (redirect) {
        return <Redirect to={'/sign-in'}/>;
    }
    if (!show) return <div>Loading...</div>;

    return (
        <Neko
            name={nekoState.name}
            logoutCallback={logoutCallback}
        />
    );
};

export default NekoContainer;

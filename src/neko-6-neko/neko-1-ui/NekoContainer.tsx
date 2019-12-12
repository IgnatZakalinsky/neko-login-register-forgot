import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import Neko from "./Neko";
import {nekoSetName} from "../neko-2-bll/nekoActions";

const NekoContainer: React.FC = () => {
    const nekoState = useSelector((store: IAppStore) => store.neko);
    const dispatch = useDispatch();
    const logoutCallback = () => dispatch(nekoSetName(''));

    return (
        <Neko
            name={nekoState.name}
            logoutCallback={logoutCallback}
        />
    );
};

export default NekoContainer;

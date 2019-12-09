import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {IRegisterActions, registerLoading} from "./registerActions";
import {RegisterAPI} from "../register-3-dal/RegisterAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register = (): ThunkAction<Return, IAppStore, ExtraArgument, IRegisterActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IRegisterActions>, getStore: IGetStore) => {

        dispatch(registerLoading(true));
        const {email, password} = getStore().register;
        const data = await RegisterAPI.register(email, password);
        dispatch(registerLoading(false));

        console.log(data)
    };

import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {forgotLoading, IForgotActions} from "./forgotActions";
import {ForgotAPI} from "../forgot-3-dal/ForgotAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const forgot = (): ThunkAction<Return, IAppStore, ExtraArgument, IForgotActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IForgotActions>, getStore: IGetStore) => {

        dispatch(forgotLoading(true));
        const {email} = getStore().forgot;
        const data = await ForgotAPI.forgot(email);
        dispatch(forgotLoading(true));

        console.log(data)
    };

import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {forgotLoading, IForgotActions, forgotSuccess, forgotError} from "./forgotActions";
import {ForgotAPI} from "../forgot-3-dal/ForgotAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const forgot = (): ThunkAction<Return, IAppStore, ExtraArgument, IForgotActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IForgotActions>, getStore: IGetStore) => {

        dispatch(forgotLoading(true));
        const {email} = getStore().forgot;

        try {
            const data = await ForgotAPI.forgot(email);
            dispatch(forgotSuccess(false));

            console.log('Neko Forgot Success!', data)
        } catch (e) {
            dispatch(forgotError(e.message));

            console.log('Neko Forgot Error!', e)
        }
    };
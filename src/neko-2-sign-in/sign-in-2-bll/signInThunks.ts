import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {ISignInActions} from "./signInActions";
import {SignInAPI} from "../sign-in-3-dal/SignInAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions>, getStore: IGetStore) => {

    const {email, password} = getStore().signIn;
    const data = await SignInAPI.signIn(email, password);
    console.log(data)
};

import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {ISignInActions, signInError, signInLoading, signInSuccess} from "./signInActions";
import {SignInAPI} from "../sign-in-3-dal/SignInAPI";
import {passwordCoding} from "../../neko-5-helpers/passwordCoding";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions>, getStore: IGetStore) => {

        dispatch(signInLoading(true));
        const {email, password, rememberMe} = getStore().signIn;

        try {
            const data = await SignInAPI.signIn(email, passwordCoding(password), rememberMe);
            dispatch(signInSuccess(true));

            console.log('Neko Sign-in Success!', data)
        } catch (e) {
            dispatch(signInError(e.message));

            console.log('Neko Sign-in Error!', e)
        }

    };

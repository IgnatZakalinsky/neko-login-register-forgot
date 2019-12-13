import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {INekoActions, nekoSetName} from "./nekoActions";
import {NekoAPI} from "../neko-3-dal/NekoAPI";
import {ISignInActions, signInSuccess} from "../../neko-2-sign-in/sign-in-2-bll/signInActions";
import {getCookie, setCookie} from "../../neko-5-helpers/cookies";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMe = (): ThunkAction<Return, IAppStore, ExtraArgument, INekoActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, INekoActions | ISignInActions>, getStore: IGetStore) => {

        dispatch(nekoSetName('Loading...'));
        const token = getCookie('token') || '';

        try {
            const data = await NekoAPI.getMe(token);
            if (data.error) {
                dispatch(nekoSetName(data.error));
                console.log('Neko Get Me Error!', data.error, token);
                setCookie('token', '', -1000);
            } else {
                dispatch(nekoSetName(data.name));
                setCookie('token', data.token, 60 * 60 * 48); // 2 days
                dispatch(signInSuccess(true));

                console.log('Neko Get Me Success!', data.name)
            }
        } catch (e) {
            dispatch(nekoSetName(e.message));

            console.log('Neko Get Me Error!', e)
        }
    };

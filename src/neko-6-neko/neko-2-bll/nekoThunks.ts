import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {INekoActions, nekoSetName} from "./nekoActions";
import {NekoAPI} from "../neko-3-dal/NekoAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMe = (): ThunkAction<Return, IAppStore, ExtraArgument, INekoActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, INekoActions>, getStore: IGetStore) => {

        dispatch(nekoSetName('Loading...'));
        const {token} = getStore().neko;

        try {
            const response = await NekoAPI.getMe(token);
            dispatch(nekoSetName(response.data.name));

            console.log('Neko Get Me Success!', response.data.name)
        } catch (e) {
            dispatch(nekoSetName(e.message));

            console.log('Neko Get Me Error!', e)
        }
    };

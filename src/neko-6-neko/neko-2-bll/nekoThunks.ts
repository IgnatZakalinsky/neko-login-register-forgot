import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {INekoActions, nekoSetName} from "./nekoActions";
import {NekoAPI} from "../neko-3-dal/NekoAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const hz = (): ThunkAction<Return, IAppStore, ExtraArgument, INekoActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, INekoActions>, getStore: IGetStore) => {

        dispatch(nekoSetName('Loading...'));
        const {name} = getStore().neko;

        try {
            // const data = await NekoAPI.hz(name);
            // dispatch(nekoSetName(data.name));
            //
            // console.log('Neko Logout Success!', data)
        } catch (e) {
            dispatch(nekoSetName(e.message));

            console.log('Neko Logout Error!', e)
        }
    };

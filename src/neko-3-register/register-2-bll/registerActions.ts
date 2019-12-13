export const REGISTER_LOADING = 'REGISTER/LOADING';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';
export const REGISTER_ERROR = 'REGISTER/ERROR';

interface IRegisterLoading {
    type: typeof REGISTER_LOADING;
    loading: boolean;
}
interface IRegisterSuccess {
    type: typeof REGISTER_SUCCESS;
    success: boolean;
}
interface IRegisterError {
    type: typeof REGISTER_ERROR;
    error: string;
}

export type IRegisterActions =
    IRegisterLoading |
    IRegisterSuccess |
    IRegisterError;

export const registerLoading = (loading: boolean): IRegisterLoading => ({
    type: REGISTER_LOADING,
    loading,
});
export const registerSuccess = (success: boolean): IRegisterSuccess => ({
    type: REGISTER_SUCCESS,
    success,
});
export const registerError = (error: string): IRegisterError => ({
    type: REGISTER_ERROR,
    error,
});

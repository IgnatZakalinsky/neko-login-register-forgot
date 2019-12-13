export const SIGN_IN_LOADING = 'SIGN_IN/LOADING';
export const SIGN_IN_SUCCESS = 'SIGN_IN/SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN/ERROR';

interface ISignInLoading {
    type: typeof SIGN_IN_LOADING;
    loading: boolean;
}

interface ISignInSuccess {
    type: typeof SIGN_IN_SUCCESS;
    success: boolean;
}
interface ISignInError {
    type: typeof SIGN_IN_ERROR;
    error: string;
}

export type ISignInActions =
    ISignInLoading |
    ISignInSuccess |
    ISignInError;

export const signInLoading = (loading: boolean): ISignInLoading => ({
    type: SIGN_IN_LOADING,
    loading,
});

export const signInSuccess = (success: boolean): ISignInSuccess => ({
    type: SIGN_IN_SUCCESS,
    success,
});
export const signInError = (error: string): ISignInError => ({
    type: SIGN_IN_ERROR,
    error,
});

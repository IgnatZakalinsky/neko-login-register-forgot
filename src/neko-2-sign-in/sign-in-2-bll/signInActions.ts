export const SIGN_IN_SET_EMAIL = 'SIGN_IN/SET_EMAIL';
export const SIGN_IN_SET_PASSWORD = 'SIGN_IN/SET_PASSWORD';
export const SIGN_IN_LOADING = 'SIGN_IN/LOADING';
export const SIGN_IN_REMEMBER_ME = 'SIGN_IN/REMEMBER_ME';
export const SIGN_IN_SUCCESS = 'SIGN_IN/SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN/ERROR';

interface ISignInSetEmail {
    type: typeof SIGN_IN_SET_EMAIL;
    email: string;
}
interface ISignInSetPassword {
    type: typeof SIGN_IN_SET_PASSWORD;
    password: string;
}

interface ISignInLoading {
    type: typeof SIGN_IN_LOADING;
    loading: boolean;
}
interface ISignInRememberMe {
    type: typeof SIGN_IN_REMEMBER_ME;
    rememberMe: boolean;
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
    ISignInSetEmail |
    ISignInSetPassword |
    ISignInLoading |
    ISignInSuccess |
    ISignInError |
    ISignInRememberMe;

export const signInSetEmail = (email: string): ISignInSetEmail => ({
    type: SIGN_IN_SET_EMAIL,
    email,
});
export const signInSetPassword = (password: string): ISignInSetPassword => ({
    type: SIGN_IN_SET_PASSWORD,
    password,
});

export const signInLoading = (loading: boolean): ISignInLoading => ({
    type: SIGN_IN_LOADING,
    loading,
});
export const signInRememberMe = (rememberMe: boolean): ISignInRememberMe => ({
    type: SIGN_IN_REMEMBER_ME,
    rememberMe,
});

export const signInSuccess = (success: boolean): ISignInSuccess => ({
    type: SIGN_IN_SUCCESS,
    success,
});
export const signInError = (error: string): ISignInError => ({
    type: SIGN_IN_ERROR,
    error,
});

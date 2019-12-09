export const SIGN_IN_SET_EMAIL = 'SIGN_IN/SET_EMAIL';
export const SIGN_IN_SET_PASSWORD = 'SIGN_IN/SET_PASSWORD';
export const SIGN_IN_LOADING = 'SIGN_IN/LOADING';

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

export type ISignInActions = ISignInSetEmail | ISignInSetPassword | ISignInLoading;

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

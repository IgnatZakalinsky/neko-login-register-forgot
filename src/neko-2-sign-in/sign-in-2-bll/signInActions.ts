export const SIGN_IN_SET_EMAIL = 'SIGN_IN/SET_EMAIL';
export const SIGN_IN_SET_PASSWORD = 'SIGN_IN/SET_PASSWORD';

interface ISignInSetEmail {
    type: typeof SIGN_IN_SET_EMAIL;
    email: string;
}
interface ISignInSetPassword {
    type: typeof SIGN_IN_SET_PASSWORD;
    password: string;
}

export type ISignInActions = ISignInSetEmail | ISignInSetPassword;

export const signInSetEmail = (email: string): ISignInSetEmail => ({
    type: SIGN_IN_SET_EMAIL,
    email,
});
export const signInSetPassword = (password: string): ISignInSetPassword => ({
    type: SIGN_IN_SET_PASSWORD,
    password,
});

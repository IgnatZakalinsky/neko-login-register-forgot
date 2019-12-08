export const SIGN_IN_SET_EMAIL = 'SIGN_IN/SET_EMAIL';

interface ISignInSetEmail {
    type: typeof SIGN_IN_SET_EMAIL;
    email: string;
}

export type ISignInActions = ISignInSetEmail;

export const signInSetEmail = (email: string): ISignInSetEmail => ({
    type: SIGN_IN_SET_EMAIL,
    email,
});

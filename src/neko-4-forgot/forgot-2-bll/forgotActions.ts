export const FORGOT_SET_EMAIL = 'FORGOT/SET_EMAIL';

interface IForgotSetEmail {
    type: typeof FORGOT_SET_EMAIL;
    email: string;
}

export type IForgotActions = IForgotSetEmail;

export const forgotSetEmail = (email: string): IForgotSetEmail => ({
    type: FORGOT_SET_EMAIL,
    email,
});

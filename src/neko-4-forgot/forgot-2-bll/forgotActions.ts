export const FORGOT_SET_EMAIL = 'FORGOT/SET_EMAIL';
export const FORGOT_LOADING = 'FORGOT/LOADING';

interface IForgotSetEmail {
    type: typeof FORGOT_SET_EMAIL;
    email: string;
}

interface IForgotLoading {
    type: typeof FORGOT_LOADING;
    loading: boolean;
}

export type IForgotActions = IForgotSetEmail | IForgotLoading;

export const forgotSetEmail = (email: string): IForgotSetEmail => ({
    type: FORGOT_SET_EMAIL,
    email,
});

export const forgotLoading = (loading: boolean): IForgotLoading => ({
    type: FORGOT_LOADING,
    loading,
});

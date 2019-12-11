export const FORGOT_SET_EMAIL = 'FORGOT/SET_EMAIL';
export const FORGOT_LOADING = 'FORGOT/LOADING';
export const FORGOT_SUCCESS = 'FORGOT/SUCCESS';
export const FORGOT_ERROR = 'FORGOT/ERROR';

interface IForgotSetEmail {
    type: typeof FORGOT_SET_EMAIL;
    email: string;
}

interface IForgotLoading {
    type: typeof FORGOT_LOADING;
    loading: boolean;
}
interface IForgotSuccess {
    type: typeof FORGOT_SUCCESS;
    success: boolean;
}
interface IForgotError {
    type: typeof FORGOT_ERROR;
    error: string;
}

export type IForgotActions = IForgotSetEmail | IForgotLoading | IForgotSuccess | IForgotError;

export const forgotSetEmail = (email: string): IForgotSetEmail => ({
    type: FORGOT_SET_EMAIL,
    email,
});

export const forgotLoading = (loading: boolean): IForgotLoading => ({
    type: FORGOT_LOADING,
    loading,
});
export const forgotSuccess = (success: boolean): IForgotSuccess => ({
    type: FORGOT_SUCCESS,
    success,
});
export const forgotError = (error: string): IForgotError => ({
    type: FORGOT_ERROR,
    error,
});

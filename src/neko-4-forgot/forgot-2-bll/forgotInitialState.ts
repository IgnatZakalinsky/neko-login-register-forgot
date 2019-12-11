export interface IForgotState {
    email: string;
    loading: boolean;
    success: boolean;
    error: string;
}

export const forgotInitialState: IForgotState = {
    email: 'test email',
    loading: false,
    success: false,
    error: '',
};

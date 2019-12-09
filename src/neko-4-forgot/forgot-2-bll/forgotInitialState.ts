export interface IForgotState {
    email: string;
    loading: boolean;
}

export const forgotInitialState: IForgotState = {
    email: 'test email',
    loading: false,
};

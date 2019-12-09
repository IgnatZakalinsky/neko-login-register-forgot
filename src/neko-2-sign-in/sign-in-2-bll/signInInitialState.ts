export interface ISignInState {
    email: string;
    password: string;
    loading: boolean;
    success: boolean;
    error: string;
}

export const signInInitialState: ISignInState = {
    email: 'test email',
    password: 'test password',
    loading: false,
    success: false,
    error: '',
};

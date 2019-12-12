export interface ISignInState {
    email: string;
    password: string;
    loading: boolean;
    success: boolean;
    error: string;
    rememberMe: boolean;
}

export const signInInitialState: ISignInState = {
    email: 'test@email.com',
    password: 'test password',
    loading: false,
    success: false,
    error: '',
    rememberMe: false,
};

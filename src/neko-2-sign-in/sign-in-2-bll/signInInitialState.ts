export interface ISignInState {
    email: string;
    password: string;
    loading: boolean;
}

export const signInInitialState: ISignInState = {
    email: 'test email',
    password: 'test password',
    loading: false,
};

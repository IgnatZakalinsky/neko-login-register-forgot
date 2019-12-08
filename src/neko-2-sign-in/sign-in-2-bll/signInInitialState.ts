export interface ISignInState {
    email: string;
    password: string;
}

export const signInInitialState: ISignInState = {
    email: 'test email',
    password: 'test password',
};

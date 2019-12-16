export interface ISignInState {
    loading: boolean;
    success: boolean;
    error: string;
}

export const signInInitialState: ISignInState = {
    loading: false,
    success: false,
    error: '',
};

export interface IRegisterState {
    email: string;
    password: string;
    password2: string;
    loading: boolean;
    success: boolean;
    error: string;
}

export const registerInitialState: IRegisterState = {
    email: 'test email',
    password: 'test password',
    password2: 'test password2',
    loading: false,
    success: false,
    error: '',
};

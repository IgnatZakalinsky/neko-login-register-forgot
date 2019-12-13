export interface IRegisterState {
    loading: boolean;
    success: boolean;
    error: string;
}

export const registerInitialState: IRegisterState = {
    loading: false,
    success: false,
    error: '',
};

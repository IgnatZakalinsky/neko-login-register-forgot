export const REGISTER_SET_EMAIL = 'REGISTER/SET_EMAIL';
export const REGISTER_SET_PASSWORD = 'REGISTER/SET_PASSWORD';
export const REGISTER_SET_PASSWORD_2 = 'REGISTER/SET_PASSWORD_2';
export const REGISTER_LOADING = 'REGISTER/LOADING';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';
export const REGISTER_ERROR = 'REGISTER/ERROR';

interface IRegisterSetEmail {
    type: typeof REGISTER_SET_EMAIL;
    email: string;
}
interface IRegisterSetPassword {
    type: typeof REGISTER_SET_PASSWORD;
    password: string;
}
interface IRegisterSetPassword2 {
    type: typeof REGISTER_SET_PASSWORD_2;
    password2: string;
}

interface IRegisterLoading {
    type: typeof REGISTER_LOADING;
    loading: boolean;
}
interface IRegisterSuccess {
    type: typeof REGISTER_SUCCESS;
    success: boolean;
}
interface IRegisterError {
    type: typeof REGISTER_ERROR;
    error: string;
}

export type IRegisterActions =
    IRegisterSetEmail |
    IRegisterSetPassword |
    IRegisterSetPassword2 |
    IRegisterLoading |
    IRegisterSuccess |
    IRegisterError;

export const registerSetEmail = (email: string): IRegisterSetEmail => ({
    type: REGISTER_SET_EMAIL,
    email,
});
export const registerSetPassword = (password: string): IRegisterSetPassword => ({
    type: REGISTER_SET_PASSWORD,
    password,
});
export const registerSetPassword2 = (password2: string): IRegisterSetPassword2 => ({
    type: REGISTER_SET_PASSWORD_2,
    password2,
});

export const registerLoading = (loading: boolean): IRegisterLoading => ({
    type: REGISTER_LOADING,
    loading,
});
export const registerSuccess = (success: boolean): IRegisterSuccess => ({
    type: REGISTER_SUCCESS,
    success,
});
export const registerError = (error: string): IRegisterError => ({
    type: REGISTER_ERROR,
    error,
});

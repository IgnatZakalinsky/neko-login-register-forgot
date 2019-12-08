export const REGISTER_SET_EMAIL = 'REGISTER/SET_EMAIL';
export const REGISTER_SET_PASSWORD = 'REGISTER/SET_PASSWORD';
export const REGISTER_SET_PASSWORD_2 = 'REGISTER/SET_PASSWORD_2';

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

export type IRegisterActions = IRegisterSetEmail | IRegisterSetPassword | IRegisterSetPassword2;

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

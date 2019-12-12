import axios from 'axios';
import {IGetMeData} from "../../neko-6-neko/neko-3-dal/NekoAPI";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const SignInAPI = {
    signIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<IGetMeData>('/auth/login', {email, password, rememberMe});
        return response.data;
    }
};

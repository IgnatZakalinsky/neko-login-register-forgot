import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export interface IGetMeData {
    name: string;
    token: string;
}

export const NekoAPI = {
    getMe: async (token: string) => {
        const response = await instance.post<IGetMeData>('/auth/me', {token});
        return response.data;
    }
};

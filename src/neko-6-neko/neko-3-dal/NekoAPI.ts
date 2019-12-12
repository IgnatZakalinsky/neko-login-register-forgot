import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

interface IGetMeData {
    name: string;
}

export const NekoAPI = {
    getMe (token: string) {
        return instance.post<IGetMeData>('/me', {token})
    }
};

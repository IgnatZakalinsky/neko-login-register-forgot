import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const RegisterAPI = {
    register: async (email: string, password: string) => {
        const response = await instance.post('/auth/register', {email, password});
        return response.data;
    }
};

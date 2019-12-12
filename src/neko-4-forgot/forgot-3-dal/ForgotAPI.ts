import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const ForgotAPI = {
    forgot: async (email: string) => {
        const response = await instance.post('/auth/forgot', {email});
        return response.data;
    }
};

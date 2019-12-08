import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const ForgotAPI = {
    forgot (email: string) {
        return instance.post('/auth/login', {email})
    }
};

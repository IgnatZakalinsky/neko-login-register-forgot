import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const RegisterAPI = {
    register (email: string, password: string) {
        return instance.post('/register', {email, password})
    }
};

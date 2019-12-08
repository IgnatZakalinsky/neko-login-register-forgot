import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const SignInAPI = {
    signIn (email: string, password: string) {
        return instance.post('/auth/login', {email, password, rememberMe: true})
    }
};

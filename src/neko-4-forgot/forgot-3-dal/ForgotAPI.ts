import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export const ForgotAPI = {
    forgot: async (email: string) => {
        const response = await instance.post('/auth/forgot', {email});
        return response.data;
    }
};

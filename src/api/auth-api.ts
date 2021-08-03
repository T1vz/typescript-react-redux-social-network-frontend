import {AxiosResponse} from 'axios'
import {AuthResponse} from "../types/AuthResponse";
import $api from "./index";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/login', {email, password})
    }

    static async registration(email: string, username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/registration', {email, username, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}

import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../../types/Auth";
import AuthService from "../../api/auth-api";
import axios from "axios";
import {AuthResponse} from "../../types/AuthResponse";
import {API_URL} from "../../api";

export const registration = (email: string, username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await AuthService.registration(email, username, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch({type: AuthActionTypes.SET_AUTH_DATA, payload: response.data.user})
            console.log(response)
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_ERROR,
                payload: e.response?.data?.message
            })
        }
    }
}

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch({type: AuthActionTypes.SET_AUTH_DATA, payload: response.data.user})
            console.log(response)
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_ERROR,
                payload: e.response?.data?.message
            })
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            dispatch({type: AuthActionTypes.REMOVE_AUTH_DATA})
            console.log(response)
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_ERROR,
                payload: e.response?.data?.message
            })
        }
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.SET_LOADING, payload: true})
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            dispatch({type: AuthActionTypes.SET_AUTH_DATA, payload: response.data.user})
            console.log(response)
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_ERROR,
                payload: e.response?.data?.message
            })
        } finally {
            dispatch({type: AuthActionTypes.SET_LOADING, payload: false})
        }
    }
}
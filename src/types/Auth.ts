import {AUser} from "./AUser";

export interface AuthState {
    id: string | null
    email: string | null
    username: string | null
    isAuth: boolean
    isActivated: boolean | null
    error: string | null
    isLoading: boolean
}

export enum AuthActionTypes {
    SET_AUTH_DATA = "API/AUTH/SET_AUTH_DATA",
    AUTH_ERROR = "API/AUTH/ERROR",
    SET_LOADING = "API/AUTH/SET_LOADING",
    REMOVE_AUTH_DATA = "API/AUTH/REMOVE_AUTH_DATA"
}

interface SetAuthDataAction {
    type: AuthActionTypes.SET_AUTH_DATA
    payload: AUser
}

interface AuthErrorAction {
    type: AuthActionTypes.AUTH_ERROR
    payload: string
}

interface SetLoadingAction {
    type: AuthActionTypes.SET_LOADING
    payload: boolean
}

interface RemoveAuthDataAction {
    type: AuthActionTypes.REMOVE_AUTH_DATA
}

export type AuthAction = SetAuthDataAction | SetLoadingAction | AuthErrorAction | RemoveAuthDataAction
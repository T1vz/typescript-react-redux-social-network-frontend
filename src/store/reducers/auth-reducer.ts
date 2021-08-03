import {AuthAction, AuthActionTypes, AuthState} from "../../types/Auth";


let initialState: AuthState = {
    id: null,
    email: null,
    username: null,
    isAuth: false,
    isActivated: null,
    error: null,
    isLoading: false
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_DATA:
            return {
                ...state,
                isAuth: true,
                ...action.payload
            }
        case AuthActionTypes.AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AuthActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case AuthActionTypes.REMOVE_AUTH_DATA:
            return {
                id: null,
                email: null,
                username: null,
                isAuth: false,
                isActivated: null,
                error: null,
                isLoading: false
            }
        default:
            return state;
    }
}

export default authReducer
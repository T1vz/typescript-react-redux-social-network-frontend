import {AUser} from "./AUser";

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user: AUser
}
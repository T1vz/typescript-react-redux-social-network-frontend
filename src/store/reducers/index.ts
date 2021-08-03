import {combineReducers} from "redux";
import authReducer from "./auth-reducer";
import todosReducer from "./todos-reducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>
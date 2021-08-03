import {Todo} from "./Todo";

export interface TodosState {
    todos: Todo[]
    error: string | null
    isLoading: boolean
    page: number
}

export enum TodosActionTypes {
    FETCH_TODOS = "API/AUTH/FETCH_TODOS",
    SET_TODOS_SUCCESS = "API/AUTH/SET_TODOS_SUCCESS",
    ADD_TODO_SUCCESS = "API/AUTH/ADD_TODO_SUCCESS",
    DELETE_TODO_SUCCESS = "API/AUTH/DELETE_TODO_SUCCESS",
    UPDATE_TODO_SUCCESS = "API/AUTH/UPDATE_TODO_SUCCESS",
    SET_TODOS_ERROR = "API/AUTH/SET_TODOS_ERROR",
    SET_TODOS_PAGE = "API/AUTH/SET_TODOS_PAGE",
}

interface FetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS
}

interface SetTodosSuccessAction {
    type: TodosActionTypes.SET_TODOS_SUCCESS
    payload: Todo[]
}

interface AddTodoSuccessAction {
    type: TodosActionTypes.ADD_TODO_SUCCESS
    payload: Todo
}

interface DeleteTodoSuccessAction {
    type: TodosActionTypes.DELETE_TODO_SUCCESS
    payload: string
}

interface UpdateTodoSuccessAction {
    type: TodosActionTypes.UPDATE_TODO_SUCCESS
    payload: Todo
}

interface SetTodosErrorAction {
    type: TodosActionTypes.SET_TODOS_ERROR
    payload: string
}

interface SetTodosPageAction {
    type: TodosActionTypes.SET_TODOS_PAGE
    payload: number
}

export type TodosAction =
    FetchTodosAction
    | SetTodosErrorAction
    | SetTodosSuccessAction
    | SetTodosPageAction
    | AddTodoSuccessAction
    | DeleteTodoSuccessAction
    | UpdateTodoSuccessAction
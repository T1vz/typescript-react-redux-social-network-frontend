import {Todo} from "./Todo";

export interface TodosResponse {
    todos: Todo[],
    hasMore: boolean
}

export interface AddTodoResponse {
    todo: Todo
}

export interface DeleteTodoResponse {
    deletedTodoId: string
}

export interface UpdateTodoResponse {
    todo: Todo
}
import {AxiosResponse} from 'axios'
import $api from "./index";
import {AddTodoResponse, DeleteTodoResponse, TodosResponse, UpdateTodoResponse} from "../types/TodosResponse";

export default class TodosService {
    static async fetchTodos(page: number): Promise<AxiosResponse<TodosResponse>> {
        return $api.post('/todos', {page})
    }

    static async addTodo(subject: string | null, content: string, deadline: Date): Promise<AxiosResponse<AddTodoResponse>> {
        return $api.post('/todos/add', {subject, content, deadline})
    }

    static async deleteTodo(todoId: string): Promise<AxiosResponse<DeleteTodoResponse>> {
        return $api.post('/todos/delete', {todoId})
    }

    static async updateTodo(todoId: string, subject: string | null, content: string, deadline: Date, isChecked: boolean): Promise<AxiosResponse<UpdateTodoResponse>> {
        return $api.post('/todos/update', {todoId, subject, content, deadline, isChecked})
    }
}
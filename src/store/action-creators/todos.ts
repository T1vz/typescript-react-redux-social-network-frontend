import {Dispatch} from "redux";
import {TodosAction, TodosActionTypes} from "../../types/Todos";
import TodosService from "../../api/todos-api";


export const fetchTodos = (page: number) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await TodosService.fetchTodos(page)
            dispatch({type: TodosActionTypes.SET_TODOS_SUCCESS, payload: response.data.todos})
            console.log(response)
        } catch (e) {
            dispatch({
                type: TodosActionTypes.SET_TODOS_ERROR,
                payload: e.response?.data?.message
            })
        }
    }
}

export const addTodo = (subject: string | null, content: string, deadline: Date) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await TodosService.addTodo(subject, content, deadline)
            dispatch({type: TodosActionTypes.ADD_TODO_SUCCESS, payload: response.data.todo})
            console.log(response)
        } catch (e) {
            dispatch({
                type: TodosActionTypes.SET_TODOS_ERROR,
                payload: e.response?.data?.message
            })
        }
    }
}

export const deleteTodo = (todoId: string) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await TodosService.deleteTodo(todoId)
            dispatch({type: TodosActionTypes.DELETE_TODO_SUCCESS, payload: response.data.deletedTodoId})
            console.log(response)
        } catch (e) {
            dispatch({
                type: TodosActionTypes.SET_TODOS_ERROR,
                payload: e.response?.data?.message
            })
        }
    }
}

export const updateTodo = (todoId: string, subject: string | null, content: string, deadline: Date, isChecked: boolean) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await TodosService.updateTodo(todoId, subject, content, deadline, isChecked)
            dispatch({type: TodosActionTypes.UPDATE_TODO_SUCCESS, payload: response.data.todo})
            console.log(response)
        } catch (e) {
            dispatch({
                type: TodosActionTypes.SET_TODOS_ERROR,
                payload: e.response?.data?.message
            })
        }
    }
}
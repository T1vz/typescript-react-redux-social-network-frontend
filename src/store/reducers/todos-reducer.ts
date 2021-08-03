import {TodosAction, TodosActionTypes, TodosState} from "../../types/Todos";


let initialState: TodosState = {
    error: null,
    todos: [],
    isLoading: false,
    page: 1
}

const todosReducer = (state = initialState, action: TodosAction): TodosState => {
    switch (action.type) {
        case TodosActionTypes.SET_TODOS_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case TodosActionTypes.SET_TODOS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case TodosActionTypes.SET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                error: null,
                isLoading: false
            }
        case TodosActionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                error: null,
                isLoading: false
            }
        case TodosActionTypes.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload),
                error: null,
                isLoading: false
            }
        case TodosActionTypes.UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id) {
                        todo = action.payload
                        return todo
                    }
                    return todo
                }),
                error: null,
                isLoading: false
            }
        case TodosActionTypes.FETCH_TODOS:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default todosReducer
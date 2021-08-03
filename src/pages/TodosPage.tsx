import React, {FC, useEffect, useState} from 'react'
import {useActions} from "../hooks/useActions";
import {fetchTodos} from "../store/action-creators/todos";
import {useTypedSelector} from "../hooks/useTypedSelection";
import TodosList from "../components/TodosPage/TodosList";

const TodosPage: FC = () => {
    const {addTodo} = useActions()
    const {page} = useTypedSelector(state => state.todos)

    const timeInMs: Date = new Date(Date.now());

    const [newTodo, setNewTodo] = useState<string>('')

    useEffect(() => {
        fetchTodos(page)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <TodosList/>
            <div>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button onClick={() => {
                    setNewTodo('')
                    addTodo(null, newTodo, timeInMs)
                }}>Add Todo
                </button>
            </div>
        </div>
    )
}

export default TodosPage
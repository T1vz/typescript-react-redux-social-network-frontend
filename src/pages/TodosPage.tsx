import React, {FC, useEffect} from 'react'
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelection";
import TodosList from "../components/TodosPage/TodosList";
import TodoAdd from "../components/TodosPage/TodoAdd";

const TodosPage: FC = () => {
    const {fetchTodos} = useActions()
    const {page} = useTypedSelector(state => state.todos)

    useEffect(() => {
        fetchTodos(page)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <TodoAdd/>
            <TodosList/>
        </div>
    )
}

export default TodosPage
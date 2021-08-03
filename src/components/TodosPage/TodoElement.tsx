import React, {FC, useState} from 'react';
import {Todo} from "../../types/Todo";
import {useActions} from "../../hooks/useActions";

type PropsType = {
    todo: Todo
}

const TodoElement: FC<PropsType> = ({todo}) => {
    const {updateTodo, deleteTodo} = useActions()

    const [newTodo, setNewTodo] = useState<string>('')
    const [updatingTodo, setUpdatingTodo] = useState<boolean>(false)

    return (
        <div key={`div${todo._id}`}>
            <input onChange={() => {
                updateTodo(todo._id, todo.subject, todo.content, todo.deadline, !todo.isChecked)
            }} type="checkbox" name="completed" checked={todo.isChecked}/>
            {updatingTodo ?
                <input value={newTodo} onChange={e => setNewTodo(e.target.value)}/> :
                <p onClick={() => {
                    updateTodo(todo._id, todo.subject, todo.content, todo.deadline, !todo.isChecked)
                }} style={todo.isChecked ? {textDecoration: "line-through"} : {}}
                   key={`p${todo._id}`}>{todo.content}</p>}
            <button onClick={() => {
                deleteTodo(todo._id)
            }}>Delete
            </button>
            {updatingTodo ?
                <button onClick={() => {
                    updateTodo(todo._id, todo.subject, newTodo, todo.deadline, todo.isChecked)
                    setUpdatingTodo(false)
                }}>Save</button> :
                <button onClick={() => {
                    setUpdatingTodo(true)
                    setNewTodo(todo.content)
                }}>Edit</button>}
        </div>
    );
};

export default TodoElement;
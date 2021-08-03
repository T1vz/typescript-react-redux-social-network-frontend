import React, {FC} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelection";
import TodoElement from "./TodoElement";

const TodosList: FC = () => {
    const {todos} = useTypedSelector(state => state.todos)

    return (
        <div>
            {todos.map(todo => {
                return <TodoElement todo={todo}/>
            })}
        </div>
    );
};

export default TodosList;
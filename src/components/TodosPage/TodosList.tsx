import React, {FC} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelection"
import TodoElement from "./TodoElement"
import {List, Spin} from 'antd'

import InfiniteScroll from 'react-infinite-scroller'
import {useActions} from "../../hooks/useActions"

const TodosList: FC = () => {
    const {todos, isLoading, page, hasMore} = useTypedSelector(state => state.todos)
    const {fetchTodos} = useActions()

    const handleInfiniteOnLoad = () => {
        fetchTodos(page)
    }

    return (
        <div className="demo-infinite-container">
            <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={handleInfiniteOnLoad}
                hasMore={!isLoading && hasMore}
                useWindow={false}
            >
                <List
                    dataSource={todos}
                >
                    {todos.map((todo) => <TodoElement todo={todo}/>)}
                    {isLoading && hasMore && (
                        <div className="demo-loading-container">
                            <Spin/>
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
    )
}

export default TodosList
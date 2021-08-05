import React, {useState} from 'react'
import {Button, Col, DatePicker, Input, Row} from "antd"
import {PlusOutlined} from "@ant-design/icons"
import {useActions} from "../../hooks/useActions"

import moment from 'moment'

const TodoAdd = () => {
    const {addTodo} = useActions()

    const [newTodo, setNewTodo] = useState<string>('')
    const [time, setTime] = useState<Date>(new Date(Date.now()))

    return (
        <Row>
            <Col span={21}>
                <Input
                    prefix={
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<PlusOutlined/>}
                            size={'small'}
                            onClick={() => {
                                setNewTodo('')
                                addTodo('Work', newTodo, time)
                            }}
                        />}
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </Col>
            <Col span={3}>
                <DatePicker showTime value={moment(time)} onChange={(val) => {
                    if (val) {
                        setTime(val.toDate())
                    }
                }}
                />
            </Col>
        </Row>
    )
}

export default TodoAdd
import React, {FC, useState} from 'react'
import {Todo} from "../../types/Todo"
import {useActions} from "../../hooks/useActions"
import moment from 'moment'
import {Button, Checkbox, Col, DatePicker, Input, List, Row} from "antd"
import {
    DeleteOutlined,
    EditOutlined,
    SaveOutlined
} from '@ant-design/icons'
import {Collapse} from 'antd'

const {Panel} = Collapse

type PropsType = {
    todo: Todo
}

const TodoElement: FC<PropsType> = ({todo}) => {
    const {updateTodo, deleteTodo} = useActions()

    const [newTodo, setNewTodo] = useState<string>('')
    const [updatingTodo, setUpdatingTodo] = useState<boolean>(false)
    const [time, setTime] = useState<Date>(todo.deadline)

    return (
        <List.Item key={`div${todo._id}`}>
            <Col flex={'none'} span={1}>
                <Checkbox onChange={() => {
                    updateTodo(todo._id, todo.subject, todo.content, todo.deadline, !todo.isChecked)
                }} checked={todo.isChecked}/>
            </Col>
            <Col flex={"auto"} span={22}>
                {updatingTodo ?
                    <Row>
                        <Col span={21}><Input value={newTodo} onChange={e => setNewTodo(e.target.value)}/></Col>
                        <Col span={3}><DatePicker value={moment(time)} defaultValue={moment(todo.deadline)} showTime
                                                  onChange={(val) => {
                                                      if (val) {
                                                          setTime(val.toDate())
                                                      }
                                                  }}
                        />
                        </Col>
                    </Row> :
                    <Collapse>
                        <Panel style={todo.isChecked ? {textDecoration: "line-through"} : {}} header={todo.content}
                               key="1">
                            <DatePicker
                                defaultValue={moment(todo.deadline)}
                                showTime
                                disabled
                            />
                        </Panel>
                    </Collapse>
                }
            </Col>
            <Col flex={'none'} span={1}>
                <Button icon={<DeleteOutlined/>} danger onClick={() => {
                    deleteTodo(todo._id)
                }}>
                </Button>
                {updatingTodo ?
                    <Button
                        icon={<SaveOutlined/>}
                        onClick={() => {
                            updateTodo(todo._id, todo.subject, newTodo, time, todo.isChecked)
                            setUpdatingTodo(false)
                        }}></Button> :
                    <Button
                        icon={<EditOutlined/>}
                        onClick={() => {
                            setUpdatingTodo(true)
                            setNewTodo(todo.content)
                        }}></Button>}
            </Col>
        </List.Item>
    )
}

export default TodoElement
import React, {FC, useState} from 'react';
import {useActions} from "../hooks/useActions";

const LoginPage: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isRegister, setIsRegister] = useState<boolean>(false)

    const {registration, login} = useActions()

    return (
        <div>
            <input
                type="text"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="Email или имя пользователя"
            />
            {isRegister ? <input
                type="text"
                onChange={e => setUsername(e.target.value)}
                value={username}
                placeholder="Имя пользователя"
            /> : null}
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="Пароль"
            />
            <button onClick={() => {
                login(email, password)
            }}>Логин
            </button>
            <button onClick={() => {
                if (isRegister) {
                    registration(email, username, password)
                }
                setIsRegister(!isRegister)
            }}>Регистрация
            </button>
        </div>
    )
}

export default LoginPage
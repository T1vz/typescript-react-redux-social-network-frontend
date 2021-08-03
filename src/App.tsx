import React, {FC, useEffect} from 'react'
import 'antd/dist/antd.css';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import LoginPage from "./pages/LoginPage";
import {useActions} from "./hooks/useActions";
import {useTypedSelector} from "./hooks/useTypedSelection";
import MessengerPage from "./pages/MessengerPage";
import TodosPage from "./pages/TodosPage";

const App: FC = () => {
    const {isLoading, isAuth} = useTypedSelector(state => state.auth)
    const {checkAuth, logout} = useActions()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    if (isAuth) {
        return <div>
            <div>
                <NavLink to='/messenger'>Go to Messenger</NavLink>
                <NavLink to='/todos'>Go to Todos</NavLink>
                <a href='/#' onClick={() => logout()}>Logout</a>
            </div>
            <div>
                <Switch>
                    <Route path='/messenger'
                           render={() => <MessengerPage/>}/>
                    <Route path='/todos'
                           render={() => <TodosPage/>}/>
                    <Route path='*'
                           render={() => <div>
                               404 NOT FOUND
                           </div>}/>
                </Switch>
            </div>
        </div>
    }

    return (
        <div>
            <LoginPage/>
        </div>
    )
}

const AppContainer: FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default AppContainer
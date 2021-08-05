import React, {FC, useEffect, useState} from 'react'
import 'antd/dist/antd.css'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from "./store"
import LoginPage from "./pages/LoginPage"
import {useActions} from "./hooks/useActions"
import {useTypedSelector} from "./hooks/useTypedSelection"
import MessengerPage from "./pages/MessengerPage"
import TodosPage from "./pages/TodosPage"

import {Layout, Menu, Breadcrumb, notification, Button} from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    SendOutlined,
    StarOutlined,
    PoweroffOutlined,
} from '@ant-design/icons'

const {Header, Content, Footer, Sider} = Layout
const {SubMenu} = Menu

const App: FC = () => {
    const {isLoading, isAuth, error, username} = useTypedSelector(state => state.auth)
    const {checkAuth, logout} = useActions()

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onCollapse = (c: boolean) => {
        setCollapsed(c)
    }

    const openNotification = (title: string, content: string) => {
        notification.open({
            message: title,
            description: content
        })
    }

    useEffect(() => {
        if (error) {
            openNotification('Error', error)
        }
    }, [error]) // eslint-disable-line react-hooks/exhaustive-deps

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
        return <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        <Link to='/profile'>Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SendOutlined/>}>
                        <Link to='/messenger'>Messenger</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TeamOutlined/>}>
                        <Link to='/friends'>Friends</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<StarOutlined/>} title="Features">
                        <Menu.Item key="5"><Link to='/todos'>Todos</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<FileOutlined/>}>
                        Files
                    </Menu.Item>
                    <Menu.Item key="7" icon={<PoweroffOutlined/>}>
                        <Button
                            onClick={logout}
                            type="primary"
                            // icon={<PoweroffOutlined />}
                        >Logout</Button>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                </Header>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>{username}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
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
                </Content>
                <Footer style={{textAlign: 'center'}}>T1vz{'<tima.bevz@gmail.com>'} Social Network</Footer>
            </Layout>
        </Layout>
    }

    return (
        <LoginPage/>
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
import React from 'react';

import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

function HeaderNavigation() {

    return (

        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/my-images'>
                        My Images
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/upload-image'>
                        Upload An Image
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to='/edit-image'>
                       Edit An Image
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to='/contact'>
                        Contact
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to='/about'>
                        About
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderNavigation;
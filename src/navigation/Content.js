import React from 'react';
import { Layout } from 'antd';
import Routes from '../routes/routes';

const { Content } = Layout;

function ContentComponent() {

    return (

        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
        >
            <Routes />
        </Content>

    )

}

export default ContentComponent;
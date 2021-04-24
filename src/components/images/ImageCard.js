import React from 'react';

import { Card, Col } from 'antd';

const { Meta } = Card;


function ImageCard({ image }) {

    return (
        <Col span={8} style={{marginBottom: '20px'}} >
            <Card title={image.name}
                bordered={true}
                hoverable
                style={{ width: 240, height: 300}}
                cover={<img alt={image.name} src={image.location} />}
            >
                <Meta title={image.name} description={image.name} />
            </Card>
        </Col>
    )
}

export default ImageCard;
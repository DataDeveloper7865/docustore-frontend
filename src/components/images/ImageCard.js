import React from 'react';

import { Card, Col } from 'antd';

const { Meta } = Card;


function ImageCard({ image }) {

    return (
        <Col span={8} >
            <Card title={image.title}
                bordered={true}
                hoverable
                style={{ width: 240, height: 300}}
                cover={<img alt={image.title} src={image.image_url} />}
            >
                <Meta title={image.title} description={image.description} />
            </Card>
        </Col>
    )
}

export default ImageCard;
import React from 'react';
import ImageCard from './images/ImageCard';
import { Row } from 'antd';

function MyImages({ images }) {

    return (
        <div className="site-card-wrapper">
                <h1>Hello World From My Images</h1>
                <p>Here are your images</p>
            <Row gutter={16}>
                {images.map(img =>
                    <ImageCard image={img} />
                )}
            </Row>
        </div>
    )
}

MyImages.defaultProps = {
    images: [
        { id: "1", title: "image1", description: "www.google.com", image_url: "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" },
        { id: "2", title: "image2", description: "www.google.com", image_url: "https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" },
        { id: "3", title: "image3", description: "www.google.com", image_url: "https://media.cntraveler.com/photos/57fea9ec8584f8cd20e65f15/16:9/w_1600,c_limit/Aerial-One&OnlyReethiRah-Maldives-CRHotel.jpg" }
    ]
}

export default MyImages;
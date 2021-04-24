import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import { Row, Space, Spin } from 'antd';
import ImageApi from '../../api/api';

function MyImages({ defaultImages }) {
    console.log("DEFAULT IMAGES IS: ", defaultImages)

    const [images, setImages] = useState(defaultImages)

    useEffect(function getAllImagesOnMount() {
        console.log("WE MOUNTED YO!!!!!!")
        getImages();
    }, []);

    async function getImages() {
        let imagesFromServer = await ImageApi.getAllImages();
        setImages(imagesFromServer.images)
    }

    if (!images) return (
        <Space size="middle">
            <Spin size="large" />
        </Space>
    )

    return (
        <div className="site-card-wrapper">
                <h1>My Images</h1>
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
    defaultImages: [
        { id: "1", title: "image1", description: "www.google.com", image_url: "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" },
        { id: "2", title: "image2", description: "www.google.com", image_url: "https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" },
        { id: "3", title: "image3", description: "www.google.com", image_url: "https://media.cntraveler.com/photos/57fea9ec8584f8cd20e65f15/16:9/w_1600,c_limit/Aerial-One&OnlyReethiRah-Maldives-CRHotel.jpg" },
        { id: "4", title: "image4", description: "www.google.com", image_url: "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" },
        { id: "5", title: "image5", description: "www.google.com", image_url: "https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" },
        { id: "6", title: "image6", description: "www.google.com", image_url: "https://media.cntraveler.com/photos/57fea9ec8584f8cd20e65f15/16:9/w_1600,c_limit/Aerial-One&OnlyReethiRah-Maldives-CRHotel.jpg" }
    ]
}

export default MyImages;
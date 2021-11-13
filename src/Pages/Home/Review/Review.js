import { Rating } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const {name,description, img } = review;
    return (
        <div className="service pb-3">
            <img className="h-50 w-50 d-inline-block" src={img} alt="" />
            <p className="px-3">{description}</p>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
            <h3>{name}</h3> 

            
        </div>
    );
};

export default Review;
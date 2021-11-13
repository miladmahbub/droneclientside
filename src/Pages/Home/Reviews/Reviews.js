
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import './reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://sleepy-hollows-68944.herokuapp.com/addreview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    
    return (
        <div id="services ">
        <h2 className="text-primary mt-5">Our reviews</h2>
        <div className="service-container pb-3">
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
            
        </div>
        
        <Link to="/addreview"><button className="button-27">Please Add Review</button></Link>
    </div>
    );
};

export default Reviews;
import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({order}) => {
    const {  _id, name, price, description, img } = order;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/singleorder/${_id}`}>
                <button className="btn btn-warning"> dlt Book {name.toLowerCase()}</button>
            </Link>
            
        </div>
    );
};

export default Order;
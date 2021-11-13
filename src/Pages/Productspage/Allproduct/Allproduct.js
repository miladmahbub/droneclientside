import React from 'react';
import './Allproduct.css';
import { Link } from 'react-router-dom';

const Allproduct = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div>
            <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={'/addproducts'}>
                <button className="button-40 m-3">Add Products</button> 
                
            </Link>
            <Link to={'/placeorder'}>
                <button className="button-43 ">placeOrder</button>
                
            </Link>
        </div>
        </div>
    );
};

export default Allproduct;

import React, { useEffect, useState } from 'react';
import './Allproducts.css'
import Allproduct from '../Allproduct/Allproduct'

const Allproducts = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sleepy-hollows-68944.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div id="services">
            <h2 className="text-primary mt-5">FEATURED COLLECTION</h2>
            <div className="service-container">
                {
                    services.map(service => <Allproduct
                        key={service.id}
                        service={service}
                    ></Allproduct>)
                }
            </div>
        </div>
        </div>
    );
};

export default Allproducts;
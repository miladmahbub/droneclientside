import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sleepy-hollows-68944.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,6)));
    }, [])

    return (
        <div>
            <div id="services">
            <h2 className="text-primary mt-5">FEATURED COLLECTION</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;
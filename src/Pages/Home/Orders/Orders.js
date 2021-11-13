import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://sleepy-hollows-68944.herokuapp.com/manageallordrs')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our order</h2>
            <div className="service-container">
                {
                    orders.map(order => <Order
                        key={order.id}
                        order={order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Orders;
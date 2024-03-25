import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar";

const OrderDetailsPage = () => {
    const [orders, setOrders] = useState([]);
    const userId = sessionStorage.getItem('userId'); // Assuming you store userId in sessionStorage after login

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/order/');
                const userOrders = response.data.filter(order => order.user === parseInt(userId));
                setOrders(userOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        if (userId) {
            fetchOrders();
        }
    }, [userId]);

    return (
        <div>
            <Navbar />
            <h1>Order Details</h1>
            <div className='bg-success mt-5 d-flex justify-between' style={{"width":'400px'}}>
            <ul style={{"listStyle":'none'}}>
                {orders.map(order => (
                    <li key={order.id} className='border mt-3 justify-center'>
                        <strong>Product Name:</strong> {order.product_name}<br />
                        <strong>Total Products:</strong> {order.total_products}<br />
                        <strong>Transaction ID:</strong> {order.transaction_id}<br />
                        <strong>Total Amount:</strong> {order.total_amount}<br />
                        <strong>Updated At:</strong> {order.updated_at}<br />
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default OrderDetailsPage;

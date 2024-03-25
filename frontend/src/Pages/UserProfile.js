import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';

function UserProfile() {
    const userId = sessionStorage.getItem('userId');
    console.log(userId);
    const [userData, setUserData] = useState(null);
    const userName = sessionStorage.getItem('userName')

    useEffect(() => {
        // Fetch the user's profile data from the backend
        axios.get(`http://127.0.0.1:8000/api/user/${userId}/`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    console.log(userData);

    return (
        <div>
            <Navbar/>
            <h2>{userName}'s Profile</h2>
            {userData ? (
                <div className='p-5 border bg-secondary'>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone:</strong> {userData.phone || 'N/A'}</p>
                    <p><strong>Gender:</strong> {userData.gender || 'N/A'}</p>
                    <p><strong>Date of Birth:</strong> {userData.dateofbirth || 'N/A'}</p>

                    <div><a href="/profile" className='btn btn-primary'>Update</a></div>
                    <div><a href="/" className='btn btn-dark mt-4'>Home</a>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        
        </div>
    );
}

export default UserProfile;

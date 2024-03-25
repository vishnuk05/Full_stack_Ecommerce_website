import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileUpdatePage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        dateofbirth: '',
    });
    const userId = sessionStorage.getItem('userId')
    console.log(userId,"at update profile."); 

    useEffect(() => {
        // Fetch the user's current profile data from the backend
        axios.get(`http://127.0.0.1:8000/api/user/${userId}/`)
            .then(response => {
                const userData = response.data;
                setFormData({
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone || '',
                    gender: userData.gender || '',
                    dateofbirth: userData.dateofbirth || '',
                });
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated profile data to the backend
        axios.put(`http://127.0.0.1:8000/api/user/${userId}/`, formData)
            .then(response => {
                console.log('Profile updated successfully:', response.data);
                navigate('/userprofile')
                alert("Updated successfully !!!")
                // Optionally, you could redirect the user or show a success message
            })
            .catch(error => {
                console.error('Error updating profile:', error);
                // Optionally, you could show an error message to the user
            });
    };

    return (
        <div>
            <h2>Update Profile</h2>
        <div className='d-flex justify-content-center mx-auto '>
        <form onSubmit={handleSubmit} className='d-flex flex-column border bg-primary bg-gradient p-3' style={{"width":'500px'}}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Update Profile</button>
                
            </form>
        </div>
        </div>
    );
};

export default ProfileUpdatePage;

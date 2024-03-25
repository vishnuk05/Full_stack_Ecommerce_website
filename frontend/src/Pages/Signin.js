import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
         // Validate inputs
    if (!name || !email || !password || !phone || !gender || !dateOfBirth) {
        setError('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    // Validate password length
    if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
    }


        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/user/',
                {
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    gender: gender,
                    date_of_birth: dateOfBirth,
                }
            );
            navigate('/login');
            console.log(response.data);
        } catch (err) {
            console.error('Error registering user: ', err);
            setError('Error registering user. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex flex-column mx-auto mt-5' style={{border:"1px solid red", width:"400px"}}>
            <h3>SignUp</h3>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <label>
                Phone:
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <br />
            <label>
                Gender:
                <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </label>
            <br />
            <label>
                Date of Birth:
                <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </label>
            <br />
            {error && <div>{error}</div>}
            <div >
            <button type="submit" class="btn btn-success" >Register</button>
            </div>
            </div>
            
        </form>
    );
};

export default RegistrationForm;

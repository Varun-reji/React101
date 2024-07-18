// LoginComponent.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './LoginComponent.css'; // Import your CSS file

const LoginComponent = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            });
            const token = response.data.token;
            onLogin(token); // Assuming onLogin is a callback to handle successful login
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn-login" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;

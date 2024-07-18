// App.jsx
import React, { useState } from 'react';
import UserComponent from './UserComponent';
import AdminComponent from './AdminComponent';
import LoginComponent from './LoginComponent';
import axios from 'axios';

const App = () => {
    const [role, setRole] = useState(null); // Default to null until logged in
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const handleLogin = async (token) => {
        try {
            const response = await axios.get('http://localhost:5000/profile', {
                headers: {
                    Authorization: token
                }
            });
            const user = response.data;
            setRole(user.role);
            setUsername(user.username);

            if (user.role === 'admin') {
                const adminResponse = await axios.get('http://localhost:5000/admin/users', {
                    headers: {
                        Authorization: token
                    }
                });
                setUsers(adminResponse.data);
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please try again.');
        }
    };

    const handleLogout = () => {
        setRole(null);
        setUsername('');
        setUsers([]);
    };

    return (
        <div>
            {error && <p>{error}</p>}
            {role ? (
                <div>
                    {role === 'user' && <UserComponent username={username} />}
                    {role === 'admin' && <AdminComponent users={users} />}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <LoginComponent onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;

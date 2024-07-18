// AdminComponent.jsx
import React from 'react';

const AdminComponent = ({ username }) => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Welcome, Admin {username}!</p>
            {/* Admin-specific functionality */}
        </div>
    );
};

export default AdminComponent;

// UserComponent.jsx
import React from 'react';

const UserComponent = ({ username }) => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <p>Welcome, {username}!</p>
            {/* User-specific functionality */}
        </div>
    );
};

export default UserComponent;

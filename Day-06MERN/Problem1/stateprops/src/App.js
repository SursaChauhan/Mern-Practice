import React, { useState } from 'react';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import './App.css';

const App = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });
  const [editMode, setEditMode] = useState(false);

  const toggleMode = () => setEditMode(!editMode);
  
  const handleUpdate = (newUserData) => {
    setUser(newUserData);
    setEditMode(false);
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h1>User Profile App</h1>
      {editMode ? (
        <EditProfile {...user} onUpdate={handleUpdate} />
      ) : (
        <UserProfile {...user} />
      )}
      <button onClick={toggleMode}>
        {editMode ? 'View Mode' : 'Edit Mode'}
      </button>
    </div>
  );
};

export default App;

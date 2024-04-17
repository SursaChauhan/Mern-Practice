import React from 'react';

const UserProfile = ({ name, email, bio }) => (
  <div className='user-profile'>
    <h2>User Profile</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Bio: {bio}</p>
  </div>
);

export default UserProfile;

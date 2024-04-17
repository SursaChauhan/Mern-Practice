import React, { useState } from 'react';

const EditProfile = ({ name, email, bio, onUpdate }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedBio, setEditedBio] = useState(bio);

  const handleNameChange = (e) => setEditedName(e.target.value);
  const handleEmailChange = (e) => setEditedEmail(e.target.value);
  const handleBioChange = (e) => setEditedBio(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      name: editedName,
      email: editedEmail,
      bio: editedBio
    });
  };

  return (
    <div className='edit-profile'>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={editedName} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={editedEmail} onChange={handleEmailChange} />
        </label>
        <label>
          Bio:
          <textarea value={editedBio} onChange={handleBioChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;

import React, { useState, useRef } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const emailRef = useRef(null);
  const [nameError, setNameError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Simple validation for name length
    if (e.target.value.length < 3) {
      setNameError('Name must be at least 3 characters long');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

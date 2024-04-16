import React, { useState } from 'react';

function ContactList() {
  // State for managing the list of contacts
  const [contacts, setContacts] = useState([]);
  
  // State for managing form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission and adding a new contact
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure both name and email are provided
    if (name.trim() !== '' && email.trim() !== '') {
      // Generate a unique ID for the new contact
      const id = Date.now().toString();
      // Add the new contact to the list
      setContacts([...contacts, { id, name, email }]);
      // Clear the form inputs
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      {/* Form to add a new contact */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Add Contact</button>
      </form>

      {/* Render the list of contacts */}
      <ul>
        {contacts.map(contact => (
          // Using the 'key' prop to optimize re-rendering
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

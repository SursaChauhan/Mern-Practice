const fetch = require('node-fetch');

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

async function displayUserData() {
    try {
        const userData = await fetchUserData();
        console.log('User Data:');
        userData.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

displayUserData();

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uermanagement-py.onrender.com',  // Your API base URL
    headers: {
        'Content-Type': 'application/json', // Optional default header
    },
});

export default api;


import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'a4a599b5b19fb6fca6b94df7abe615d0',
        language: 'en-US',
    },
});

export default api;

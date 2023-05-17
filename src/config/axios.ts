import axios from 'axios';

// Create axios instance
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',

    },    
})

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//     function (config):any {
//         // Do something before request is sent
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     function (error):any {
//         // Do something with request error
//         return Promise.reject(error);
//     }
// )

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//     function (response):any {
//         // Do something with response data
//         return response;
//     },
//     function (error):any {
//         // Do something with response error
//         return Promise.reject(error);
//     }
// )

export default axiosInstance;
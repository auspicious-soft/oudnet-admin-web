import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';


const axiosInstance = axios.create({
  baseURL: BASE_URL,  
  headers: {
    'Content-Type': 'application/json',  
  },
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || ''; 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Optional: Response Interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  response => response.data,  // Return only the data from the response
  error => {
    // Global error handling (you can log, display notifications, etc.)
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const getApi = async (url, config = {}) => {
  try {
    const response = await axiosInstance.get(url, config);
    return response;
  } catch (error) {
    console.error('GET Error:', error.message);
    throw error;  
  }
};


export const postApi = async (url, data, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    return response;
  } catch (error) {
    console.error('POST Error:', error.response.data.message);
    throw error; 
  }
};
  

export const putApi = async (url, data, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    return response;
  } catch (error) {
    console.error('PUT Error:', error.message);
    throw error;  
  }
};

export const patchApi = async (url, data, config = {}) => {
  try {
    const response = await axiosInstance.patch(url, data, config);
    return response;
  } catch (error) {
    console.error('PATCH Error:', error.message);
    throw error;  
  }
};


export const deleteApi = async (url, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return response;
  } catch (error) {
    console.error('DELETE Error:', error.message);
    throw error; 
  }
};

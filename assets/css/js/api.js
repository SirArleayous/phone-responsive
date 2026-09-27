// Central Express Backend API Base URL
const API_BASE_URL = 'http://localhost:5000/api/v1';

/**
 * Global helper function for backend API calls
 * @param {string} endpoint - e.g. '/auth/login', '/campaigns', '/tasks'
 * @param {string} method - GET, POST, PUT, PATCH, DELETE
 * @param {object|null} body - JSON request body
 */
async function apiRequest(endpoint, method = 'GET', body = null) {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
  };

  // Automatically attach JWT token if stored
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`[API Error] Request to ${endpoint} failed:`, error);
    return {
      success: false,
      message: 'Unable to connect to SINEX backend server on port 5000.',
    };
  }
}
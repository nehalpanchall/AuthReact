class ApiClient {
  constructor() {
    this.baseURL = 'http://localhost:60000/api/v1';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  async customFetch(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = { ...this.defaultHeaders, ...options.header };
    const config = {
      ...options,
      headers,
      credentials: 'include', // For Cookie
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        console.error('API Error:', data);
        throw new Error('Request failed with status: ' + response.status); // custom error message using new keyword
      }

      return data;
    } catch (error) {
      console.error('API Fetching error:', error);
      throw error; // original error
    }
  }

  // auth endpoints

  async userRegister(userName, email, password) {
    return this.customFetch('/users/register', {
      method: 'POST',
      body: JSON.stringify({ userName, email, password }),
    });
  }
}

// singleton design pattern
const apiClient = new ApiClient();

export default apiClient;

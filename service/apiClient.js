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
    const header = { ...this.defaultHeaders, ...options.header };
    const config = {
      ...options,
      header,
      credentials: 'include', // For Cookie
    };

    try {
      const response = await fetch(url, config);
    } catch (error) {}
  }
}

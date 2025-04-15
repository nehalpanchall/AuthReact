class ApiClient {
  constructor() {
    this.baseURL = 'http://localhost:60000/api/v1';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
}

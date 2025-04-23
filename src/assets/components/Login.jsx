import { use, useState } from 'react';
import apiClient from '../../../service/apiClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await apiClient.userLogin(email, password);
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Please wait' : 'Login'}
        </button>
      </form>
    </>
  );
}

export default Login;

import { useState } from 'react';
import apiClient from '../../../service/apiClient';

function Registration() {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await apiClient.userRegister(userName, email, password);
      console.log(data);
    } catch (error) {
    } finally {
      setUsername('');
      setEmail('');
      setPassword('');
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
        />
        <br />
        <br />

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">{loading ? 'Please wait...' : 'Register'}</button>
      </form>
    </>
  );
}

export default Registration;

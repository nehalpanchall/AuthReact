import { use, useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submitHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" value={email} /> <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" value={password} />
        <br /> <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Please wait' : 'Login'}
        </button>
      </form>
    </>
  );
}

export default Login;

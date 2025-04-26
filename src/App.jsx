import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>React + Node Authentication</h1>
      <Link to="/login">Login</Link> <br></br>
      <Link to="/registration">Register</Link>
    </>
  );
}

export default App;

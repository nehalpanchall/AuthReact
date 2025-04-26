import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();

  const { userName } = location.state.data;

  return (
    <>
      <h1>Hello, {userName} </h1>

      <Link to="/profile">Profile</Link>
    </>
  );
};

export default Dashboard;

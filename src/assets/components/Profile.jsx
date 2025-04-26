import { useState } from 'react';
import apiClient from '../../../service/apiClient';

const Profile = () => {
  const [hasUserData, setHasUserData] = useState(false);
  const [id, setId] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  try {
    const response = apiClient.userProfile();
    response.then((result) => {
      const userData = result.data;
      userData ? setHasUserData(true) : setHasUserData(false);
      const { _id, userName, email, role } = userData;

      setId(_id);
      setUsername(userName);
      setEmail(email);
      setRole(role);
    });
  } catch (error) {}
  return (
    <>
      <h1>User Profile</h1>
    </>
  );
};

export default Profile;

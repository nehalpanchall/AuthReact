import apiClient from '../../../service/apiClient';

const Profile = () => {
  try {
    const response = apiClient.userProfile();
    response.then((result) => {
      const userData = result.data;
      const { _id, userName, email, role } = userData;
    });
  } catch (error) {}
  return (
    <>
      <h1>User Profile</h1>
    </>
  );
};

export default Profile;

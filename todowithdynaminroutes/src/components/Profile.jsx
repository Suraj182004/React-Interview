import { useContext } from 'react';
import UserContext from '../UserContext';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div className="bg-green-100 p-4 rounded">
      <h2 className="text-lg font-semibold">👤 User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Profile;

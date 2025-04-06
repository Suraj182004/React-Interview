import { useContext } from 'react';
import UserContext from '../UserContext';

function Header() {
  const user = useContext(UserContext);

  return (
    <div className="bg-blue-100 p-4 mb-4 rounded">
      <h1 className="text-xl">👋 Welcome, {user.name}!</h1>
    </div>
  );
}

export default Header;

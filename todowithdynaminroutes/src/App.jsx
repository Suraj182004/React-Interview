import UserContext from './UserContext';
import Header from './components/Header';
import Profile from './components/Profile';
import Post from './components/Post';
function App() {
  const user = { name: 'Ravi', role: 'Developer' };

  return (
    <UserContext.Provider value={user}>
      <div className="p-6">
        <Header />
        <Profile />
        <Post />
      </div>
    </UserContext.Provider>
  );
}

export default App;

import { Link } from 'react-router-dom';

const dummyTasks = [
  { id: 1, title: 'Buy groceries' },
  { id: 2, title: 'Complete project' },
  { id: 3, title: 'Go to gym' },
];

function Tasks() {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/tasks" className="text-blue-500 hover:underline">Tasks</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
      </nav>

      <h1 className="text-2xl font-bold mb-4 text-green-600">📋 All Tasks</h1>
      <ul className="space-y-2">
        {dummyTasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`} className="text-indigo-600 hover:underline">
              🔗 {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

import { useParams, Link } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/tasks" className="text-blue-500 hover:underline">Tasks</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/input-focus" className="text-blue-500 hover:underline">Input Focus</Link>
      </nav>

      <h1 className="text-2xl font-bold text-orange-600">📝 Task Detail</h1>
      <p className="mt-2 text-gray-700">You are viewing details for task ID: <strong>{id}</strong></p>
    </div>
  );
}

export default TaskDetail;

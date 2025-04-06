import { useQuery } from '@tanstack/react-query';

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
}

function Post() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // optional: auto marks data fresh for 5 sec
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">📄 Posts</h1>
      <button onClick={refetch} className="mb-4 bg-blue-600 text-white px-3 py-1 rounded">
        🔄 Refetch Posts
      </button>
      <ul className="space-y-2">
        {data.slice(0, 5).map(post => (
          <li key={post.id} className="border p-2 rounded">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;

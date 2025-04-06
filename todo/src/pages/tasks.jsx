import React from 'react'
import { Link } from 'react-router-dom'

const Tasks = () => {
  return (
    <div className="p-6">
          <nav className="flex gap-4 mb-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/tasks" className="text-blue-500 hover:underline">Tasks</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
      </nav>
    <h1 className="text-3xl font-bold text-green-600">📋 Tasks Page</h1>
    <p className="mt-2">We'll show tasks here.</p>
  </div>
  )
}

export default Tasks
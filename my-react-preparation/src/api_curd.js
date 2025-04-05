import {useEffect,useState} from'react';

import React from 'react'

const Api_curd = () => {
    const [tasks, setTasks] = useState([]);
    const[newTask,setNewTask]=useState('');
    const API_URL='http://localhost:3000/task';
    useEffect(()=>{
     fetch(API_URL)
        .then((res)=>res.json())
        .then((data)=>setTasks(data));
     },[]);

     const handleAddTask = async (e) => {
        e.preventDefault();
        if(newTask.trim() !== '') {
            const task = {
                title: newTask,
                completed: false,
            };
            try {
                const res = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(task),
                });
                if (!res.ok) throw new Error('Failed to add task');
                const data = await res.json();
                setTasks([...tasks, data]);
                setNewTask('');
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
     };

     const deleteTask = async (id) => {
        try {
            // Ensure id is a valid number and convert to string safely
            const taskId = String(parseInt(id));
            if (!taskId || isNaN(parseInt(id))) {
                throw new Error('Invalid task ID');
            }
            
            const response = await fetch(`${API_URL}/${taskId}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error(`Failed to delete task: ${response.status}`);
            }
            
            setTasks(tasks.filter((task) => task.id !== parseInt(id)));
        } catch (error) {
            console.error('Error deleting task:', error.message);
        }
     };
   
  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: 'auto' }}>
      <h2>📋 Task Manager</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: '8px', width: '70%' }}
        />
        <button style={{ padding: '8px 12px', marginLeft: '10px' }}>Add</button>
      </form>

      <ul style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            ✅ {task.title}
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: '15px', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Api_curd
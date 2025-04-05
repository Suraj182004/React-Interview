import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task,settask]=useState('');
  const [todos,settodos]=useState([]);

  const addTask=()=>{
    if(task.trim()==='') return;
    settodos([...todos,task]);
    settask('');
  }

  const remove = (index) => {
    const updatedTodos = todos.filter((_,i)=>i!==index);
    settodos(updatedTodos);
  }

  return (
    
    <div style={{padding:'20px'}}>
      <h1>Todo App</h1>
      <input type="text" placeholder="Add a task" value={task} onChange={(e)=>settask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo} <button onClick={()=>remove(index)}>Remove</button></li>
        ))}
      </ul>     
    </div>
  )
}

export default App

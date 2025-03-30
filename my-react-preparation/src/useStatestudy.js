import React from 'react'
import { useState } from 'react';

const useStatestudy = () => {
  const [count,setCount]=useState(0);
  return (
    <div>useStatestudy
        <h1>Count:{count+1}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default useStatestudy
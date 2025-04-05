import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const Useeffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`Clicked ${count} times`
    },[count]);
;
  return (
    
    <div>useeffect
        <p>you clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>
            clickme
        </button>
    </div>
  )
}

export default Useeffect
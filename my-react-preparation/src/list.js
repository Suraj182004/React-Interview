import React from 'react'

const list = () => {
    const numbers = [1,2,3,4,5];
  return (
    <div>list
    <ul>
    {numbers.map((name,index)=>(
        <li key={index}>{name}</li>
    ))}
    </ul>
    </div>
  )
}

export default list
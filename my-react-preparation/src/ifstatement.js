import React from 'react'

const ifstatement = () => {
    const isLoggedIn = false;
  return (
    <div>ifstatement
        {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  )
}

export default ifstatement
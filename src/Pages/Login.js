import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    

  return (
    <div className='input-wrapper'>
      <div className='login'>
        <div>
            <h1>Join</h1>
        </div>
        <div className='input'>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
          <input type="text" value={room} onChange={e => setRoom(e.target.value)} placeholder='Room' />
          <Link to={room && name !== '' ? `/chatroom/${room}/${name}` : ""}><button>SIGN IN</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Login

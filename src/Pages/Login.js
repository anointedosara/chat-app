import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
      e.preventDefault()
      room.trim() && name.trim() && history.push(`/chatroom/${room}/${name}`)
    }

  return (
    <div className='input-wrapper'>
      <div className='login'>
        <div>
            <h1>Join</h1>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
          <input type="text" value={room} onChange={e => setRoom(e.target.value)} placeholder='Room' />
          <button type='submit'>SIGN IN</button>
        </form>
      </div>
    </div>
  )
}

export default Login

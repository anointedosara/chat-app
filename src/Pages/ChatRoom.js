import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ChatRoom() {
    const [message, setMessage] = useState('')
    const params = useParams()
    const [adminMessage, setAdminMessage] = useState('')
    const [reply, setReply] = useState([])

    const handleClick = () => {
        if (message !== '') {
            setReply([...reply, message])
            console.log(reply)
            setMessage('')
        }
    }

    setTimeout(() => {
        setAdminMessage(<>
            <div>Hello {params.name}, Welcome! to room {params.room}</div>
            <p>Admin</p>
        </>)
    }, 3000);

  return (
    <div className='chatroom'>
       <div className='content-wrapper'>
        <div className='chat-section'>
            <nav className='nav'>
                <div>
                    <i className="fa-solid fa-circle"></i>
                    <p>{params.room}</p>
                </div>
                <Link to='/'><i className="fa-solid fa-xmark"></i></Link>
            </nav>
            <div className='message'>
                <div className='admin-welcome'>{adminMessage}</div>
                <div className='reply-wrapper'>
                {
                    reply.map((item, i) => 
                    <div className='reply' key={i}>
                        <p>{params.name}</p>
                        <div>{item}</div>
                    </div>
                )
                }
                </div>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <input style={{borderRadius: '0 0 0 5px'}} type="text" onChange={e => setMessage(e.target.value)} placeholder='Type a message...' value={message} />
                <button style={{borderRadius: '0 0 5px 0'}} onClick={handleClick}>SEND</button>
            </form>
        </div>

        <div className='about'>
            <div>
                <h1>Realtime Chat Application 💬</h1>
                <p>Created with Reactjs ❤️</p>
                <p>Try it out right now! ⬅️</p>
            </div>
            <div>
                <h1>People currently chatting:</h1>
                <div>
                    <p>{params.name}</p>
                    <i className="fa-solid fa-circle"></i>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ChatRoom

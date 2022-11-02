import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';

const socket = new WebSocket('ws://localhost:5000/')

function App() {

  const [users, setUsers] = useState([])

  useEffect( () => {
    socket.send(JSON.stringify({
      method: 'connection',
      id: `${ (+new Date()).toString(16) }`
    }));

    socket.addEventListener('message', e => {
      const users = JSON.parse(e.data);
      
      setUsers(users)
    })
  }, [])
  
  return (
    <>
      <h1>Привет</h1>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <h2>{user.username}</h2>  
              <p>{user.password}</p>
            </div>
          );
        })
      }
    </>
  
  );
}

export default App;

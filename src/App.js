import { Route, Switch } from 'react-router-dom';
import './App.css';
import './chatroom.css';
import ChatRoom from './Pages/ChatRoom';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/chatroom/:room/:name' ecact component={ChatRoom} />
      </Switch>
    </div>
  );
}

export default App;

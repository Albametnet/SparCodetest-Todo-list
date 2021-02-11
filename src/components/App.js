import React, {useState} from 'react';
import TodoList from '../pages/TodoList'
import Login from '../pages/Login';

function App() {
  const [token, setToken] = useState();
  
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "Bearer=" + token + "; expires=" + date;
  
  if (token) {
      return <TodoList onSetToken={setToken} />;
  } else {
      return <Login onSetToken={setToken} />;
  }
}

export default App;
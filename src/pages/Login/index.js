import React, { useState } from 'react';
import getToken from '../../services/FakeBackRequest'
import logo from '../../images/logosparta.png'
import './index.scss'


export default function Login({ onSetToken }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function onLogin() {
    getToken(user, password).then(
      (token) => onSetToken(token),
      (error) => setError(error),
    );
  }


  return (
    <div className="login">
      <img alt="Sparta image" src={logo} />
      <div className="login__access">

        <label htmlFor="user">Login
        <input placeholder="Enter email" id="user" onChange={(event) => setUser(event.target.value)} />
        </label>

        <label htmlFor="password" onChange={(event) => setPassword(event.target.value)}>Password
        <input placeholder="Enter Password" id="password" />
        </label>
      </div>


      <button className="login__access-button" onClick={onLogin}>Login</button>
    </div>
  );
}
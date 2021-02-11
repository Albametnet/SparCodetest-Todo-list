import React from 'react';
import './index.scss'

export default function Header({ onSetToken }) {

  const onLogOut = () => {
    onSetToken("")
    sessionStorage.removeItem('todoStore');
  }

  return (
    <div className="header">
      <button className="header__logout-button" onClick={onLogOut}>Logout</button>
    </div>

  )

}
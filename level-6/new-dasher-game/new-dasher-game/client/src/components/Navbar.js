import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout, token } = props
  return (
    <div className="navbar">
      <Link to="/">Play Game</Link>
      <Link to="/scores">High Scores</Link>
      {token ? <button onClick={logout}>Logout</button> : <Link to="/auth">Sign Up/Login</Link>}
    </div>
  )
}
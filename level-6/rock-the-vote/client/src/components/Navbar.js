import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { token, logout } = props
  return (
    <div className="navbar">
      {token && <Link to="/profile">Profile</Link>}
      <Link to="/public">Public</Link>
      {token && <button onClick={logout}>Logout</button>}
    </div>
  )
}
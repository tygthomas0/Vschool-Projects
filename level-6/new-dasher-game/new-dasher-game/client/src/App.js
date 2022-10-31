import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'
import ScorePage from './components/ScorePage.js'
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      <Navbar logout={logout} token={token}/>
      <Routes>
        <Route 
          path="/"
          element={<Public />}
        />
        <Route 
          path="/auth" 
          element={ token ? <Navigate to="/"/> : <Auth />}
        />
        <Route 
          path="/scores"
          element={ <ScorePage />}
        />
      </Routes>
    </div>
  )
}
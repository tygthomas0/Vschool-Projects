import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){
  const { token, logout, addScore, setUserState, addScoreWithPrevScore } = useContext(UserContext)
  return (
    <div className="app">
      <Navbar logout={logout} token={token}/>
      <Routes>
        <Route 
          path="/"
          element={<Public token={token} addScore={addScore} setUserState={setUserState} addScoreWithPrevScore={addScoreWithPrevScore}/>}
        />
        <Route 
          path="/auth" 
          element={ token ? <Navigate to="/"/> : <Auth />}
        />
        <Route 
          path="/scores"
          element={<Profile />}
        />
      </Routes>
    </div>
  )
}
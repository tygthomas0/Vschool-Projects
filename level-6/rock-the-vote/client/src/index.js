import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import './index.css'
import UserContext from './context/UserProvider.js'

ReactDOM.render(
  <BrowserRouter>
    <UserContext>
        <App/>
    </UserContext>
  </BrowserRouter>, 
  document.getElementById('root')
)
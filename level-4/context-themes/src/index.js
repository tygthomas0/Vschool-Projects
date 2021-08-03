import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeContextProvider} from "./ThemeContext"

ReactDOM.render(<ThemeContextProvider><App /></ThemeContextProvider>, document.getElementById('root'));
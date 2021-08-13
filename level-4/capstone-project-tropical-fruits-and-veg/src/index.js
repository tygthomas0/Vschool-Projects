import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PlantContextProvider} from "./PlantContext"

ReactDOM.render(
    <PlantContextProvider>
      <App />
    </PlantContextProvider>,
  document.getElementById('root')
);
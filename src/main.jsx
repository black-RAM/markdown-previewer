import React from 'react'
import ReactDOM from 'react-dom/client'
import rawMarkup from "./sample.md?raw"
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App sample={rawMarkup}/>
  </React.StrictMode>
)


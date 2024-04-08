import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

async function fetchSample() {
  try {
    const response = await fetch('/sample.txt')
    if (!response.ok) throw new Error('Failed to fetch Markdown content')
    const markdownText = await response.text()
    return markdownText
  } catch (error) {
    console.error('Error fetching sample content:', error);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App sample={await fetchSample()}/>
  </React.StrictMode>,
)

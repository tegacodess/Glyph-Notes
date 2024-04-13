import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// import './index.css'
window.toggleTheme = () => {
  const root = document.getElementById('root');
  const themeToggle = document.getElementById('theme-toggle');
  const darkTheme = root.classList.contains('dark-theme');
  root.classList.toggle('dark-theme');
  themeToggle.innerText = darkTheme? 'Toggle theme' : 'Toggle light theme';
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
)

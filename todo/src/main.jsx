import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/home';
import Tasks from './pages/tasks';
import About from './pages/about';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div className="p-6 text-red-600">404 Not Found</div>} />
    </Routes>
  </BrowserRouter>
</StrictMode>
)

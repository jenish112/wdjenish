import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Admin from './components/Admin';
import Hotel from './pages/Hotel';
import Netflix from './pages/Netflix';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route exact path='/resume' element={<Resume />} />
      <Route exact path='/admin' element={<Admin />} />
      <Route exact path='/hotel' element={<Hotel />} />
      <Route exact path='/netflix' element={<Netflix />} />
    </Routes>
  </Router>
);
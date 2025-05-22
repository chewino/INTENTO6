
// index.jsx - Punto de entrada de la app React

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceReport from './views/AttendanceReport';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AttendanceReport />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

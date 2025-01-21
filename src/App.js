import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BatchForm from './components/BatchForm';
import GradesForm from './components/GradesForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import logo from './assets/assets.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="University Logo" />
          </div>
          <div className="title-container">
            <h1 className="college-title">Chennai Institute of Technology</h1>
            <h2 className="app-subtitle">CGPA Calculator</h2>
          </div>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BatchForm />} />
            <Route path="/grades" element={<GradesForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

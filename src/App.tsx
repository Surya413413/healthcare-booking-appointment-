import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import './styles/global.css';
import './styles/components.css';
import './styles/responsive.css';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <header className="app-header">
            <div className="container">
              <h1 className="app-title">
                <a href="/">NirogGyan</a>
              </h1>
              <nav className="app-nav">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/doctor/:doctorId" element={<DoctorProfilePage />} />
              <Route path="/book-appointment/:doctorId" element={<BookAppointmentPage />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <div className="container">
              <p>&copy; 2025 NirogGyan. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'; // ✅ IMPORTANTE

import Registro from './Auth/Registro';
import Login from './Auth/Login';
import Paciente from './Pages/Paciente/Paciente';
import Profesional from './Pages/Profesional/Profesional';
import Turnos from './Pages/Turnos/Turnos';
import CrearDisponibilidad from './Pages/Profesional/CrearDisponibilidad';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

function App() {
  return (
    <AuthProvider> {/* ✅ Envuelve todo en el provider */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Registro />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/header" element={<Header />} />
            <Route path="/paciente" element={<Paciente />} />
            <Route path="/profesional" element={<Profesional />} />
            <Route path="/paciente/turnos" element={<Turnos />} />
            <Route path="/profesional/disponibilidad" element={<CrearDisponibilidad />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

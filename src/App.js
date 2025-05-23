import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from './Auth/Registro';
import Login from './Auth/Login';
import Paciente from './Pages/Paciente/Paciente';
 import Profesional from './Pages/Profesional/Profesional';
import Turnos from './Pages/Turnos/Turnos';
import CrearDisponibilidad from './Pages/Profesional/CrearDisponibilidad';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Registro />} />
          <Route path="/login" element={<Login/>} />
          
          <Route path="/paciente" element={<Paciente/>} />
          <Route path="/profesional" element={<Profesional/>} /> 
          <Route path="/paciente/turnos" element={<Turnos/>} /> 
          <Route path="/profesional/disponibilidad" element={<CrearDisponibilidad />} />
          {/* Acá más adelante podés agregar otras rutas como /login, /panel, etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

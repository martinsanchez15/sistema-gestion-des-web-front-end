import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import "../styles/Profesional.css";

function Profesional() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-700 text-center">
            Sistema de Turnos - Profesional
          </h2>
        </header>

        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Bienvenido/a, {usuario?.nombre}
        </h1>
        <p className="text-center text-gray-600 mb-8">Rol: {usuario?.rol}</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/profesional/disponibilidad')}
            className="bg-purple-600 hover:bg-purple-700 transition-colors text-white px-4 py-3 rounded shadow"
          >
            Crear Disponibilidad
          </button>

          <button
            onClick={() => navigate('/profesional/turnos')}
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-3 rounded shadow"
          >
            Ver Turnos Asignados
          </button>

          <button
            onClick={() => navigate('/profesional/pacientes')}
            className="bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-3 rounded shadow"
          >
            Ver Pacientes
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-3 rounded shadow"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profesional;

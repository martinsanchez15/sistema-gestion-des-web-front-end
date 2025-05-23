import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profesional() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Bienvenido/a, {usuario?.nombre}</h1>
      <p className="text-lg mb-6">Rol: {usuario?.rol}</p>

      <div className="flex flex-col gap-4 max-w-sm">
        <button
          onClick={() => navigate('/profesional/turnos')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ver Turnos Asignados
        </button>
        <button
          onClick={() => navigate('/profesional/pacientes')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Ver Pacientes
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Profesional;

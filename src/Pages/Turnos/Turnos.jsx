import React from 'react';
import { useAuth } from '../../Context/AuthContext';

function Turnos() {
  const { usuario } = useAuth();

  // Simulación de turnos (esto vendría de una API en un proyecto real)
  const turnosMock = [
    { id: 1, fecha: '2025-05-24', hora: '10:00', profesional: 'Dr. Gómez', paciente: 'Juan Pérez' },
    { id: 2, fecha: '2025-05-26', hora: '15:30', profesional: 'Dra. Ruiz', paciente: 'Ana López' },
  ];

  // Filtrar según rol
  const turnos = turnosMock.filter((turno) =>
    usuario?.rol === 'paciente'
      ? turno.paciente === usuario.nombre
      : turno.profesional.includes(usuario.nombre)
  );

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Tus Turnos</h2>
      {turnos.length === 0 ? (
        <p className="text-gray-600">No hay turnos asignados.</p>
      ) : (
        <ul className="space-y-4">
          {turnos.map((turno) => (
            <li key={turno.id} className="p-4 border rounded shadow">
              <p><strong>Fecha:</strong> {turno.fecha}</p>
              <p><strong>Hora:</strong> {turno.hora}</p>
              {usuario.rol === 'paciente' ? (
                <p><strong>Profesional:</strong> {turno.profesional}</p>
              ) : (
                <p><strong>Paciente:</strong> {turno.paciente}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Turnos;

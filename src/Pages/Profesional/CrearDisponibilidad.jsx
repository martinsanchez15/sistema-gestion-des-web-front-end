import React, { useState } from 'react';

function CrearDisponibilidad() {
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [duracion, setDuracion] = useState(30); // minutos, puede ser fijo o editable

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica para enviar los datos al backend o almacenarlos
    console.log({ fecha, horaInicio, horaFin, duracion });
    alert('Disponibilidad creada (simulado)');
    // limpiar formulario
    setFecha('');
    setHoraInicio('');
    setHoraFin('');
    setDuracion(30);
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Crear Disponibilidad</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          Fecha:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </label>

        <label>
          Hora Inicio:
          <input
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </label>

        <label>
          Hora Fin:
          <input
            type="time"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </label>

        <label>
          Duración de turno (minutos):
          <select
            value={duracion}
            onChange={(e) => setDuracion(Number(e.target.value))}
            className="border p-2 rounded w-full"
          >
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={60}>60</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          Publicar Disponibilidad
        </button>
      </form>
    </div>
  );
}

export default CrearDisponibilidad;

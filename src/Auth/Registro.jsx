import React, { useState } from 'react';
import { registrarPaciente, registrarProfesional } from '../api';
import { useNavigate } from 'react-router-dom';
import "../styles/Registro.css";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    password: '',
    rol: 'paciente',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos al backend:", formData);

    try {
      if (formData.rol === 'paciente') {
        await registrarPaciente(formData);
      } else {
        await registrarProfesional(formData);
      }

      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar el usuario.");
    }
  };

  return (
    <div className="registro-container">
      <div className='form-box'>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>DNI:</label>
            <input type="text" name="dni" value={formData.dni} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Rol:</label>
            <select name="rol" value={formData.rol} onChange={handleChange}>
              <option value="paciente">Paciente</option>
              <option value="profesional">Profesional</option>
            </select>
          </div>
          <button type="submit">Registrarse</button>
          <p className="text-center-link">
            ¿Ya tenés cuenta? <a href="/login">Iniciá sesión</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registro;

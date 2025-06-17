import React, { useState } from 'react';
import { registrarPaciente, registrarProfesional } from '../api';
import { useNavigate } from 'react-router-dom';
import "../styles/Registro.css";

function Registro() {
  const [formData, setFormData] = useState({
    Nombre: '',
    Apellido: '',
    DNI: '',
    Email: '',
    Password: '',
    Rol: 'paciente',
    Especialidad: '' // Solo se usa si elige profesional
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
      if (formData.Rol === 'paciente') {
        const paciente = {
          Nombre: formData.Nombre,
          Apellido: formData.Apellido,
          DNI: formData.DNI,
          Email: formData.Email,
          Password: formData.Password
        };
        await registrarPaciente(paciente);
      } else {
        const profesional = {
          Nombre: formData.Nombre,
          Apellido: formData.Apellido,
          DNI: formData.DNI,
          Email: formData.Email,
          Password: formData.Password,
          Especialidad: formData.Especialidad
        };
        await registrarProfesional(profesional);
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
            <input type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input type="text" name="Apellido" value={formData.Apellido} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>DNI:</label>
            <input type="text" name="DNI" value={formData.DNI} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" name="Password" value={formData.Password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Rol:</label>
            <select name="Rol" value={formData.Rol} onChange={handleChange}>
              <option value="paciente">Paciente</option>
              <option value="profesional">Profesional</option>
            </select>
          </div>

          {formData.Rol === "profesional" && (
            <div className="form-group">
              <label>Especialidad:</label>
              <input type="text" name="Especialidad" value={formData.Especialidad} onChange={handleChange} required />
            </div>
          )}

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

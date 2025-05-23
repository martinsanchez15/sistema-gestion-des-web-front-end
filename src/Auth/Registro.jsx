import React, { useState } from 'react';
import "../styles/Registro.css"

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    rol: 'paciente',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // 1. Verificar si ya existe un usuario con ese email
    const res = await fetch("http://localhost:4000/usuarios");
    const data = await res.json();

    const yaExiste = data.some(u => u.email === formData.email);
    if (yaExiste) {
      alert("Ya existe un usuario con ese mail.");
      return;
    }

    // 2. Registrar el usuario nuevo
    const resPost = await fetch("http://localhost:4000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (resPost.ok) {
      alert("Usuario registrado correctamente");
      window.location.href = "/login";
    } else {
      alert("Hubo un error al registrar el usuario.");
    }

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
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Rol:</label>
          <select name="rol" value={formData.rol} onChange={handleChange}>
            <option value="paciente">Paciente</option>
            <option value="profesional">Profesional</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
        <p  className="text-center-link">
  ¿Ya tenés cuenta? <a href="/login">Iniciá sesión</a>
</p>
      </form>
      </div>
    </div>
  );
}

export default Registro;

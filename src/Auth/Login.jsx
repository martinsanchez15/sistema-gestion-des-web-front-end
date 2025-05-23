import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import '../styles/Registro.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    contraseña: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`http://localhost:4000/usuarios?email=${formData.email}&contraseña=${formData.contraseña}`);
    const data = await response.json();

    if (data.length > 0) {
      const usuario = data[0];
      login(usuario);
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));

      if (usuario.rol === 'profesional') {
        navigate('/profesional');
      } else {
        navigate('/paciente');
      }
    } else {
      alert('Email o contraseña incorrectos');
    }
  } catch (error) {
    console.error('Error en el login:', error);
    alert('Ocurrió un error. Intentalo de nuevo más tarde.');
  }
};

  return (
    <div className="registro-container">
      <div className="form-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p className="text-center-link">
          ¿No tenés cuenta? <a href="/">Registrate</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import '../styles/Registro.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '', // ✅ Usar "password" (sin tilde)
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

    const API_URL = process.env.REACT_APP_API_URL;
    console.log("Iniciando sesión contra:", API_URL);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password // ✅ Corregido
        })
      });

      if (!response.ok) {
        const mensaje = await response.text();
        throw new Error(mensaje || 'Login inválido');
      }

      const data = await response.json();

      // Guardar token y usuario
      login(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('usuario', JSON.stringify(data.usuario));

      if (data.usuario.rol === 'profesional') {
        navigate('/profesional');
      } else {
        navigate('/paciente');
      }

    } catch (error) {
      console.error('Error en el login:', error);
      alert('❌ Email o contraseña incorrectos. ' + (error.message || ''));
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
              name="password" // ✅ Corregido
              value={formData.password}
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

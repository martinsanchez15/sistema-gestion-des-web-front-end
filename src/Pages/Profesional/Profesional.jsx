import React, { useState } from 'react';
import {
  User, Calendar, Clock, Users, LogOut, Menu, X, Bell, Settings
} from 'lucide-react';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import '../../styles/Profesional.css';

function Profesional() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Obtener usuario desde localStorage
  const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
  const nombre = usuario?.rol === "profesional" ? `Dr. ${usuario.nombre}` : usuario.nombre || "Profesional";
  const rol = usuario?.rol || "";

  const navegarA = (ruta) => {
    console.log(`Navegando a: ${ruta}`);
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/';
  };

  const menuItems = [
    {
      icon: Calendar,
      title: "Crear Disponibilidad",
      description: "Gestioná tus horarios disponibles.",
      color: "purple",
      action: () => navegarA('/profesional/disponibilidad')
    },
    {
      icon: Clock,
      title: "Turnos Asignados",
      description: "Revisá tus citas programadas.",
      color: "blue",
      action: () => navegarA('/profesional/turnos')
    },
    {
      icon: Users,
      title: "Pacientes",
      description: "Administrá tu lista de pacientes.",
      color: "green",
      action: () => navegarA('/profesional/pacientes')
    }
  ];

  return (
    <div className="profesional-container">
      <Header />

      <div className="section-header">
        <h1>
          Bienvenido/a, <span>{nombre}</span>
        </h1>
        <p>{rol.charAt(0).toUpperCase() + rol.slice(1)}</p>
      </div>

      <div className="quick-stats">
        <div className="card stat">
          <Clock className="icon" />
          <div>
            <h3>Turnos Hoy</h3>
            <p>8</p>
          </div>
        </div>
        <div className="card stat">
          <Users className="icon" />
          <div>
            <h3>Pacientes Activos</h3>
            <p>24</p>
          </div>
        </div>
        <div className="card stat">
          <Calendar className="icon" />
          <div>
            <h3>Disponibilidad</h3>
            <p>72%</p>
          </div>
        </div>
      </div>

      <div className="acciones">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={`card accion ${item.color}`} onClick={item.action}>
              <div className="icon-wrapper">
                <Icon className="icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>Acceder →</span>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Profesional;

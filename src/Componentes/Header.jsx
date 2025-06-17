// Header.jsx
import { LogOut, Menu, X, User, Stethoscope, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Header.css';

const rutasPorRol = {
  profesional: [
    { texto: 'Disponibilidad', ruta: '/profesional/disponibilidad', icon: Calendar },
    { texto: 'Turnos', ruta: '/profesional/turnos', icon: Calendar },
    { texto: 'Pacientes', ruta: '/profesional/pacientes', icon: User },
  ],
  paciente: [
    { texto: 'Mis Turnos', ruta: '/paciente/turnos', icon: Calendar },
    { texto: 'Historial', ruta: '/paciente/historial', icon: Stethoscope },
  ],
};

const Header = ({ title = 'Sistema de Turnos Médicos' }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
  const nombre = usuario.nombre || "Usuario";
  const rol = usuario.rol || "";

  const opciones = rutasPorRol[rol] || [];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate('/login');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getRolIcon = (rol) => rol === 'profesional' ? Stethoscope : User;
  const RolIcon = getRolIcon(rol);

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <div className="header__content">

            {/* Logo */}
            <div className="header__brand" onClick={() => navigate('/')}>
              <div className="header__logo">
                <Stethoscope size={24} />
              </div>
              <h1 className="header__title">{title}</h1>
            </div>

            {/* Desktop */}
            <div className="header__desktop">
              <div className="header__user-info">
                <div className="header__user-avatar">
                  <RolIcon size={16} />
                </div>
                <div className="header__user-details">
                  <div className="header__user-name">{nombre}</div>
                  <div className="header__user-role">
                    {rol === 'profesional' ? `Dr. ${nombre}` : 'Paciente'}
                  </div>
                </div>
              </div>

              <nav className="header__nav">
                {opciones.map(({ texto, ruta, icon: Icon }) => (
                  <button key={ruta} onClick={() => navigate(ruta)} className="header__nav-item">
                    <Icon size={18} />
                    <span>{texto}</span>
                  </button>
                ))}
                <button onClick={handleLogout} className="header__nav-item header__nav-item--logout">
                  <LogOut size={18} />
                  <span>Salir</span>
                </button>
              </nav>
            </div>

            {/* Botón mobile */}
            <button onClick={toggleMenu} className="header__mobile-toggle">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <div className="header__mobile-content">
            <div className="header__mobile-user">
              <div className="header__mobile-avatar">
                <RolIcon size={20} />
              </div>
              <div className="header__mobile-user-details">
                <div className="header__mobile-user-name">{nombre}</div>
                <div className="header__mobile-user-role">
                  {rol === 'profesional' ? `Dr. ${nombre}` : 'Paciente'}
                </div>
              </div>
            </div>

            {opciones.map(({ texto, ruta, icon: Icon }) => (
              <button
                key={ruta}
                onClick={() => {
                  navigate(ruta);
                  setIsMenuOpen(false);
                }}
                className="header__mobile-nav-item"
              >
                <Icon size={20} />
                <span>{texto}</span>
              </button>
            ))}

            <button onClick={handleLogout} className="header__mobile-nav-item header__mobile-nav-item--logout">
              <LogOut size={20} />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      <div className="header__spacer"></div>
    </>
  );
};

export default Header;

import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decoded = jwtDecode(storedToken);
      const usuarioGuardado = {
        id: decoded.id,
        email: decoded.email,
        nombre: decoded.nombre,
        rol: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || decoded.role
      };
      setUsuario(usuarioGuardado);
      setToken(storedToken);
    }
  }, []);

  const login = ({ token }) => {
    const decoded = jwtDecode(token);
    const userInfo = {
      id: decoded.id,
      email: decoded.email,
      nombre: decoded.nombre,
      rol: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || decoded.role
    };

    setUsuario(userInfo);
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(userInfo));
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

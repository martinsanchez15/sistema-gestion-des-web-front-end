const API_URL = process.env.REACT_APP_API_URL;

// 🔐 Función para obtener headers con token
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// ==========================
// 🔐 AUTENTICACIÓN
// ==========================

// Login (paciente o profesional)
export const loginUsuario = async (email, contraseña) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, contraseña }),
  });
  if (!res.ok) throw new Error("Login fallido");
  return res.json();
};

// ==========================
// 🧍 PACIENTES
// ==========================

// Registrar Paciente
export const registrarPaciente = async (paciente) => {
  const res = await fetch(`${API_URL}/api/paciente`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paciente),
  });
  if (!res.ok) throw new Error("Error al registrar paciente");
  return res.json();
};

export const obtenerPacientes = async () => {
  const res = await fetch(`${API_URL}/api/paciente`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Error al obtener pacientes");
  return res.json();
};

// ==========================
// 👨‍⚕️ PROFESIONALES
// ==========================

// Registrar Profesional
export const registrarProfesional = async (profesional) => {
  const res = await fetch(`${API_URL}/api/profecional`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profesional),
  });
  if (!res.ok) throw new Error("Error al registrar profesional");
  return res.json();
};

export const obtenerProfesionales = async () => {
  const res = await fetch(`${API_URL}/api/profecional`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Error al obtener profesionales");
  return res.json();
};

// ==========================
// 📅 TURNOS
// ==========================

export const obtenerTurnos = async () => {
  const res = await fetch(`${API_URL}/api/turno`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Error al obtener turnos");
  return res.json();
};

export const crearTurno = async (turno) => {
  const res = await fetch(`${API_URL}/api/turno`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(turno),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Error al crear turno");
  }
  return res.json();
};

export const eliminarTurno = async (id) => {
  const res = await fetch(`${API_URL}/api/turno/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Error al eliminar turno");
  return res.json();
};

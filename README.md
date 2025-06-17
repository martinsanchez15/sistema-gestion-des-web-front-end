# 🖥️ Turno Médico Frontend

Este es el frontend del sistema de gestión de turnos médicos desarrollado con **React**. Forma parte del Proyecto Final de la Tecnicatura en Desarrollo y Calidad de Software (UNSTA), conectado a un backend REST con autenticación y roles.

---

## ✅ Funcionalidades Implementadas

- Registro e inicio de sesión de **pacientes** y **profesionales**
- **Login protegido con JWT** (token almacenado en `localStorage`)
- Visualización personalizada según rol:
  - Pantalla `/paciente`
  - Pantalla `/profesional`
- Header dinámico que muestra:
  - Nombre del usuario
  - Rol (Paciente / Dr. [Nombre])
- Redirección automática según el tipo de usuario
- Contexto global de sesión con `AuthContext.jsx`
- Menú y navegación por secciones con diseño responsive
- Estilos CSS personalizados

---

## 🛠️ Tecnologías

- React + Vite
- React Router DOM
- Context API
- JWT Decode
- CSS puro
- GitHub para control de versiones

---

## 📌 Estado actual

✅ Login funcional con diferenciación de roles.  
✅ Interfaz dinámica y responsive.  
✅ Sesión persistente y protegida.  
✅ Comunicación completa con API REST.

---
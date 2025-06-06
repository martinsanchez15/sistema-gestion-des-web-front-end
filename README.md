# 🖥️ Turno Médico Frontend

Este es el frontend del sistema de gestión de turnos médicos desarrollado con **React**. Forma parte del proyecto final de la Tecnicatura en Desarrollo y Calidad de Software (UNSTA).

---

## ✅ Funcionalidades Implementadas

- Registro de **pacientes** y **profesionales** con conexión al backend
- Inicio de sesión con validación contra API y almacenamiento de token JWT
- Navegación protegida según el **rol del usuario**
- Vista separada para cada tipo de usuario: `/paciente` y `/profesional`
- Almacenamiento de token y datos de sesión en `localStorage`
- Lógica de autenticación y contexto de usuario (`AuthContext`)
- Estilos personalizados con CSS

---

## 🛠️ Tecnologías

- React (Vite)
- React Router DOM
- Context API
- Fetch API
- CSS personalizado
- GitHub para control de versiones

---

## 📌 Próximas tareas a implementar

### 🧍 Vista Paciente

- [ ] Mostrar lista de turnos del paciente autenticado
- [ ] Botón para cancelar un turno
- [ ] Visualizar datos del perfil del paciente
- [ ] Mostrar mensaje de bienvenida con su nombre

### 👨‍⚕️ Vista Profesional

- [ ] Listar todos los turnos asignados al profesional
- [ ] Filtrar turnos por fecha
- [ ] Visualizar datos de contacto del paciente en cada turno

### 🔒 Autenticación y Sesión

- [ ] Agregar botón de **Cerrar sesión**
- [ ] Redirigir automáticamente si el usuario está logueado
- [ ] Proteger rutas para evitar acceso directo sin token

### 🎨 UI y Experiencia

- [ ] Mejorar diseño responsive para dispositivos móviles
- [ ] Validación visual de errores en formularios (email inválido, contraseña corta, etc.)
- [ ] Indicadores de carga al enviar formularios
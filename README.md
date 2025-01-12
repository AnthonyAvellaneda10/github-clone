<h1 align="center">Github clone 🚀</h1>

Este proyecto es una aplicación web completa que permite a los usuarios autenticarse a través de GitHub y gestionar información sobre sus seguidores y seguidos. Está compuesto por un backend en Node.js y Express, y un frontend en React con TypeScript.

![Demo App](https://i.ibb.co/vJ08F7w/github-mockup.png)


# Características del Proyecto

- 🔒 **Autenticación con GitHub**: Los usuarios pueden iniciar sesión utilizando su cuenta de GitHub.
- 📄 **Gestión de Usuarios**: Permite obtener y mostrar el perfil del usuario, así como sus seguidores y seguidos.
- 🗄️ **Base de Datos MongoDB**: Utiliza MongoDB para almacenar la información de los usuarios.
- 🌐 **Backend en Node.js y Express**: El servidor está construido con Node.js y Express, proporcionando una API RESTful.
- ⚛️ **Frontend en React y TypeScript**: La interfaz de usuario está construida con React y TypeScript, ofreciendo una experiencia de usuario moderna y dinámica.
- 🎨 **Diseño con Tailwind CSS**: Utiliza Tailwind CSS para un diseño rápido y eficiente.
- 🔐 **Middleware de Seguridad**: Implementa middleware para asegurar que solo los usuarios autenticados puedan acceder a ciertas rutas.


### Configurar archivo .env

```js
PORT=5000
MONGO_URI=
GITHUB_API_KEY=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
CLIENT_BASE_URL=
```

### Construir la aplicación

```shell
npm run build
```

### Iniciar la aplicación

```shell
npm start
```
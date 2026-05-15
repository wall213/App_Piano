# PianoTrainer

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Habilitado-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

**PianoTrainer** es una aplicación web interactiva de nivel profesional diseñada para la práctica y el aprendizaje del piano. Construida con un stack tecnológico moderno, ofrece una experiencia fluida y de alta fidelidad para músicos directamente desde el navegador.

---

## Características Principales

-  **Audio de Alta Fidelidad**: Impulsado por **Tone.js**, con samples de piano realistas y respuesta de baja latencia.
-  **Teclado Interactivo**: Soporte completo de 88 teclas con diseño responsivo y feedback táctil/click interactivo.
-  **Mapeo de Teclado PC**: Toca de forma natural usando el teclado de tu computadora con mapeos optimizados.
-  **UI/UX Premium**: Interfaz impresionante que incluye glassmorphism, efectos 3D y animaciones personalizadas creadas con Tailwind CSS v4.
-  **Enfoque en Rendimiento**: Construido con React 19 y Vite 8 para tiempos de carga ultrarrápidos y HMR.
-  **Listo para Docker**: Totalmente contenedorizado y listo para despliegue en producción con Nginx.

---

##  Stack Tecnológico

- **Framework**: [React 19](https://react.dev/)
- **Herramienta de Construcción**: [Vite 8](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Motor de Audio**: [Tone.js](https://tonejs.github.io/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Despliegue**: [Docker](https://www.docker.com/) & [Nginx](https://www.nginx.com/)

---

## Inicio Rápido

### Requisitos Previos

- [Node.js](https://nodejs.org/) (se recomienda v22+)
- [pnpm](https://pnpm.io/) (gestor de paquetes preferido)

### Instalación

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/wall213/App_Piano.git
    cd App_Piano
    ```

2.  **Instalar dependencias**:
    ```bash
    pnpm install
    ```

3.  **Ejecutar el servidor de desarrollo**:
    ```bash
    pnpm run dev
    ```

---

##  Despliegue con Docker

Para construir y ejecutar el contenedor de producción:

```bash
# Construir la imagen
docker build -t pianotrainer .

# Ejecutar el contenedor
docker run -p 8080:80 pianotrainer
```

La aplicación estará disponible en `http://localhost:8080`.

---

##  Estructura del Proyecto

```text
src/
├── components/     # Componentes de UI reutilizables
│   ├── layout/     # Estructuras de diseño (Header, Footer, etc.)
│   └── piano/      # Lógica y UI específica del piano
├── hooks/          # Hooks personalizados de React (Motor de audio, Bindings de teclado)
├── types/          # Definiciones de TypeScript
├── views/          # Vistas principales (Home, Login, Practice)
└── assets/         # Recursos estáticos e imágenes
```

---

## Licencia

Este proyecto es privado y para fines educativos. Todos los derechos reservados.

---

Desarrollado con ❤️ por Aldo Garcia


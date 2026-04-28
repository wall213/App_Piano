# Etapa 1: Construcción (Build)
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos solo los archivos de dependencias primero para aprovechar la caché de Docker
COPY package.json package-lock.json* ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Compilamos la aplicación (generará la carpeta 'dist')
RUN npm run build

# Etapa 2: Servidor (Production)
FROM nginx:alpine

# Copiamos la configuración personalizada de Nginx (para React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos compilados de la etapa anterior al directorio que usa Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]

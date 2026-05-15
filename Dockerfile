# Etapa 1: Construcción (Build)
FROM node:22-alpine AS builder

# Habilitar corepack para usar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiamos los archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalamos las dependencias usando pnpm
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código fuente
COPY . .

# Compilamos la aplicación (generará la carpeta 'dist')
RUN pnpm run build

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


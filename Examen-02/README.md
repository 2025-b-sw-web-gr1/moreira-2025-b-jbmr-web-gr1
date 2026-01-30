⚽ Gestor de Equipos y Jugadores (API RESTful)
Este es un backend robusto construido con NestJS para el examen de Web, que gestiona Equipos y Jugadores implementando una relación de base de datos Uno a Muchos (1:N).

El sistema utiliza TypeORM con SQLite para la persistencia de datos, asegurando una gestión eficiente de la información deportiva.

🛠️ Tecnologías
Framework: NestJS

Lenguaje: TypeScript

ORM: TypeORM

Base de Datos: SQLite

Documentación: Swagger (OpenAPI)

Frontend: HTML5 / JavaScript (Fetch API)

📦 1. Instalación de Dependencias
Asegúrate de tener instalado Node.js. Dentro de la carpeta del proyecto, ejecuta:

Bash
# Instalar las dependencias necesarias
npm install
▶️ 2. Ejecutar el Servidor
Bash
# Modo desarrollo (con autorecarga)
npm run start:dev
Una vez iniciado, el servidor escuchará en el puerto 3000. Nota: Al arrancar, se creará automáticamente un archivo database.sqlite en la raíz del proyecto.

🌐 3. Interfaz Web y Documentación
El proyecto incluye dos formas de interactuar visualmente:

Panel de Gestión Web: 👉 http://localhost:3000 (Interfaz para crear equipos y ver la lista en tiempo real).

Documentación Interactiva (Swagger): 👉 http://localhost:3000/api (Para probar todos los endpoints de Equipos y Jugadores).

⚡ 4. Ejemplos de Endpoints (CLI)
Ejemplos listos para copiar y pegar en la terminal usando curl.

📂 Recursos de Equipos (Teams)
Crear un Equipo

Bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Real Madrid", "country": "España"}'
Listar todos los Equipos

Bash
curl -X GET http://localhost:3000/teams
Obtener un Equipo y sus Jugadores por ID

Bash
curl -X GET http://localhost:3000/teams/1/players
Eliminar un Equipo

Bash
curl -X DELETE http://localhost:3000/teams/1
🏃 Recursos de Jugadores (Players)
Crear un Jugador (Vinculado al Equipo ID: 1)

Bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Luka Modric", "position": "Mediocampista", "team": 1}'
Listar todos los Jugadores

Bash
curl -X GET http://localhost:3000/players
Actualizar posición de un Jugador

Bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"position": "Delantero"}'
🏗️ Estructura del Proyecto
Teams: Entidad principal.

Players: Entidad dependiente (Muchos jugadores pertenecen a un Equipo).

Relación: Implementada mediante @OneToMany y @ManyToOne con TypeORM.
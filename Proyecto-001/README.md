📘 Proyecto 001 – Diseño y Documentación de APIs RESTful (1 a Muchos)
👥 Integrantes del Grupo

Nombre del estudiante 1

Nombre del estudiante 2 (opcional)

📌 Descripción del Proyecto

El presente proyecto tiene como objetivo diseñar, documentar y probar una API RESTful que represente una relación uno a muchos, utilizando herramientas de documentación y testing de APIs.

Para fines educativos y de validación real de endpoints, se utilizó la API pública JSONPlaceholder, la cual permite simular operaciones REST con URLs HTTPS válidas.

🧠 Relación 1 a Muchos

En el contexto del proyecto se modeló la siguiente relación:

Un Equipo de fútbol tiene muchos Jugadores

Cada Jugador pertenece a un solo Equipo

🔁 Adaptación a JSONPlaceholder
Concepto del Proyecto	API Real (JSONPlaceholder)
Equipo (Team)	User
Jugador (Player)	Post
1 Equipo → muchos Jugadores	posts?userId={id}

Esta adaptación permite demostrar correctamente el concepto de relación 1 a muchos usando una API real.

🛠️ Herramientas Utilizadas

Bruno: herramienta para probar y validar endpoints HTTP

Swagger / OpenAPI 3.0: documentación de la API

Swagger Editor / Swagger UI: visualización interactiva

GitHub: control de versiones y entrega del proyecto

🌐 API Base Utilizada
https://jsonplaceholder.typicode.com

📂 Estructura del Proyecto
Proyecto-001/
├── bruno/
│   ├── get-all-teams.bru
│   ├── get-team-by-id.bru
│   ├── create-team.bru
│   ├── update-team.bru
│   ├── delete-team.bru
│   ├── get-all-players.bru
│   ├── get-player-by-id.bru
│   ├── get-players-by-team.bru
│   ├── create-player.bru
│   ├── update-player.bru
│   ├── patch-player.bru
│   └── delete-player.bru
├── swagger/
│   └── football-api.yaml
└── README.md

🧪 Pruebas con Bruno

Los archivos .bru fueron creados desde la interfaz de Bruno y permiten:

Probar métodos HTTP: GET, POST, PUT, PATCH y DELETE

Validar respuestas HTTP (200, 201)

Comprobar la relación 1 a muchos mediante:

GET /posts?userId=1

📘 Documentación Swagger

La documentación de la API fue realizada utilizando el estándar OpenAPI 3.0.

🔍 Cómo visualizar la documentación:

Abrir: https://editor.swagger.io/

Copiar el contenido del archivo:

swagger/football-api.yaml


Pegar el contenido en el editor

Visualizar y probar los endpoints desde Swagger UI

✅ Resultados Obtenidos

Se documentaron correctamente todos los endpoints del proyecto.

Se validó la relación 1 a muchos usando parámetros de consulta (userId).

Se utilizaron URLs reales con HTTPS funcional.

Se integraron herramientas profesionales usadas en entornos reales de desarrollo.

🏁 Conclusión

El desarrollo del Proyecto 001 permitió consolidar conocimientos sobre:

Diseño de APIs RESTful

Uso de métodos HTTP

Documentación de APIs con Swagger

Pruebas de APIs con Bruno

Modelado de relaciones 1 a muchos

Este proyecto representa una base sólida para el desarrollo y documentación de servicios web modernos.
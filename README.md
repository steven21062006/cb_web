# Portafolio Personal Interactivo 

Este proyecto consiste en una aplicación web tipo Portafolio y Blog Técnico, desarrollada como parte de la asignatura de Desarrollo Web.

Aunque el requerimiento inicial solicitaba el uso de una API simulada (JSON Server), **se ha implementado una arquitectura Full Stack real** integrando una base de datos relacional **PostgreSQL** y un backend robusto en **Node.js/Express**.

## 🚀 Características Principales

* **Arquitectura Cliente-Servidor:** Separación clara entre Frontend (React) y Backend (Node.js).
* **Base de Datos Real:** Persistencia de datos (Experiencia laboral y Posts del blog) utilizando **PostgreSQL**.
* **Gestión de Estado Global:** Uso de `Context API` para el manejo de temas (Modo Claro / Oscuro).
* **Routing Dinámico:** Navegación fluida con `React Router v6`.
* **Conexión API:** Consumo de datos mediante `Axios`.

---

##  Stack Tecnológico

* **Frontend:** React.js, CSS3 (Variables nativas para temas).
* **Backend:** Node.js, Express.js.
* **Base de Datos:** PostgreSQL.
* **Librerías Clave:** `pg` (conexión a DB), `cors`, `dotenv`.

---

##  Estructura del Proyecto

Para facilitar la revisión, la estructura se ha organizado de la siguiente manera:

```text
/
├── database.sql         # SCRIPT DE INICIALIZACIÓN DE LA BDD (Requerido)
├── package.json         # Dependencias del Frontend
├── public/
└── src/
    ├── api/             # Configuración de Axios
    ├── backend/         # CÓDIGO DEL SERVIDOR (API + DB)
    │   ├── db.js        # Conexión (Pool) a PostgreSQL
    │   ├── index.js     # Endpoints y configuración del servidor
    │   └── .env.example # Ejemplo de variables de entorno
    ├── components/      # Componentes de React (Vistas)
    └── context/         # Lógica del Tema (Claro/Oscuro)

Guía de Instalación y Despliegue
Sigue estos pasos para levantar el entorno completo (Base de Datos, Backend y Frontend).

1. Configuración de la Base de Datos (PostgreSQL)
El profesor o evaluador debe ejecutar el script incluido para generar las tablas y datos necesarios.

Asegúrate de tener PostgreSQL instalado y corriendo.

Crea una base de datos vacía llamada portafolio_db.

Ubica el archivo database.sql en la raíz de este proyecto.

Ejecuta el script en tu herramienta SQL favorita (pgAdmin, DBeaver o Terminal).

Contenido que generará el script:

Tabla experiencia.

Tabla posts.

Inserción de datos semilla (posts de ejemplo y experiencia laboral).

2. Configuración del Backend (API)
El backend corre en el puerto 5000 y sirve los datos al frontend.

Abre una terminal y navega a la carpeta del servidor:

Bash

cd src/backend
Instala las dependencias del servidor:

Bash

npm install
Variables de Entorno: Crea un archivo llamado .env dentro de la carpeta src/backend y configura tus credenciales locales de PostgreSQL. Puedes guiarte por el archivo .env.example:

Fragmento de código

# Archivo: src/backend/.env
DB_USER=postgres
DB_PASSWORD=tu_contraseña_aqui
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portafolio_db
PORT=5000
Inicia el servidor:

Bash

node index.js
Deberás ver el mensaje: "Servidor corriendo en http://localhost:5000"

3. Configuración del Frontend (React)
El frontend corre en el puerto 3000.

Abre una nueva terminal en la raíz del proyecto (sin cerrar la del backend).

Instala las dependencias de React:

Bash

npm install
Inicia la aplicación:

Bash

npm start
El navegador se abrirá automáticamente en http://localhost:3000.

Endpoints de la API
El backend expone los siguientes endpoints JSON para consumo del frontend:
Método,Endpoint,Descripción
GET,/experiencia,Devuelve el listado de experiencia laboral.
GET,/posts,Devuelve todos los artículos del blog.
GET,/posts/:id,Devuelve el detalle de un artículo específico.

Nota sobre la Implementación de PostgreSQL
Se optó por reemplazar json-server por PostgreSQL para cumplir con estándares de la industria, permitiendo:

Integridad de datos: Tipos de datos estrictos y claves primarias.

Escalabilidad: Preparado para manejar grandes volúmenes de datos.

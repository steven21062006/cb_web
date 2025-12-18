-- Script de inicialización para Portafolio (PostgreSQL)

-- 1. Crear la base de datos (Debe crear manualmente o usar este comando si está conectado a postgres)
-- CREATE DATABASE portafolio_db;

-- 2. Estructura de Tabla: posts
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    date VARCHAR(50),
    content TEXT
);

-- 3. Estructura de Tabla: experiencia
DROP TABLE IF EXISTS experiencia;
CREATE TABLE experiencia (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    period VARCHAR(50)
);

-- 4. Datos Iniciales: Experiencia
INSERT INTO experiencia (title, period) VALUES 
('Desarrollo de Página Web Yzdeesigner', '2025');

-- 5. Datos Iniciales: Posts
INSERT INTO posts (title, date, content) VALUES 
('Cómo construir una lista de tareas con React y JSON Server', '2025-04-10', '<h3>1. Introducción</h3><p>Crear un CRUD (Crear, Leer, Actualizar, Borrar) es la base de casi cualquier aplicación web. En este tutorial, conectaremos una interfaz de React con una API simulada usando JSON Server.</p><h3>2. Configuración con Axios</h3><p>Para comunicarnos con el backend, preferimos <strong>Axios</strong> sobre fetch porque simplifica el manejo de errores y la conversión a JSON. Lo instalamos con:</p><pre><code class="bash">npm install axios</code></pre><h3>3. Obtener Datos (Read)</h3><p>Usamos el hook <code>useEffect</code> para pedir las tareas apenas carga el componente. Es vital manejar el estado de carga:</p><pre><code class="javascript">useEffect(() => {  client.get("/todos").then(response => { setTodos(response.data); }) .catch(error => console.error("Error cargando tareas:", error));}, []);</code></pre><h3>4. Renderizado de la Lista</h3><p>Finalmente, recorremos el array de tareas usando <code>map()</code> para mostrar cada elemento en pantalla, asignando siempre una <code>key</code> única.</p>');

INSERT INTO posts (title, date, content) VALUES 
('Introducción a PostgreSQL: Potencia y Estabilidad', '2025-04-15', '<h3>¿Por qué elegir PostgreSQL?</h3><p>PostgreSQL es un sistema de gestión de bases de datos relacional de objetos (ORDBMS) de código abierto, conocido por su fiabilidad y robustez.</p><h3>Características Clave</h3><ul><li><strong>Cumplimiento ACID:</strong> Garantiza que las transacciones sean seguras y consistentes.</li><li><strong>Soporte JSONB:</strong> Permite guardar documentos JSON y hacer consultas rápidas.</li><li><strong>Extensibilidad:</strong> Puedes crear tus propios tipos de datos y funciones.</li></ul><h3>Integración con Node.js</h3><p>Para conectarlo con Node.js, utilizamos la librería <code>pg</code>, creando un pool de conexiones para manejar múltiples usuarios eficientemente.</p>');

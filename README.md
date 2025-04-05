# MiniApp

Una simulación simple de una aplicación de tareas con tres capas: Frontend, Backend y Base de Datos.

## Estructura del Proyecto
- `frontend.js`: Simula la interfaz de usuario y envía tareas al backend.
- `backend.js`: Procesa las tareas, las valida y las guarda en la base de datos.
- `database.js`: Simula una base de datos con un array para almacenar tareas.

## Cómo Ejecutar
1. Asegúrate de tener Node.js instalado.
2. Copia los archivos en un directorio.
3. Ejecuta `node frontend.js` para iniciar la simulación (nota: las dependencias están simuladas y requieren integración manual).

## Notas
- Esta es una simulación básica. En un entorno real, las capas se conectarían mediante módulos (require/import) o APIs.
- Consulta los comentarios en cada archivo para detalles sobre escalabilidad, mantenibilidad y seguridad.

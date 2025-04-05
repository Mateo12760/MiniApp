// ---- Backend (Lógica del servidor) ----
const Backend = {
  handleTask(taskName) {
    // Validación básica (no vacía)
    if (!taskName || taskName.trim() === "") {
      return "Error: La tarea no puede estar vacía";
    }

    // Envia la tarea a la base de datos (simulada, en un entorno real se importaría)
    const result = Database.saveTask(taskName);
    return `Tarea guardada: ${taskName}`; // Respuesta al frontend
  }
};

// Comentario Backend:
// - Función: Recibe la tarea, la valida y la pasa a la base de datos.
// - Escalabilidad: Usar REST/GraphQL para solicitudes concurrentes.
// - Mantenibilidad: Separar validaciones y lógica en funciones independientes.
// - Seguridad: Implementar autenticación y cifrado en comunicaciones.

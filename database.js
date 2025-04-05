// ---- Base de Datos (Simulada con una lista) ----
const Database = {
  tasks: [], // Array simulando una tabla de base de datos

  saveTask(taskName) {
    this.tasks.push(taskName); // Guarda la tarea en la lista
    console.log(`Base de Datos: Tarea guardada. Lista actual: ${this.tasks}`);
    return true; // Éxito
  }
};

// Comentario Base de Datos:
// - Función: Almacena las tareas en una lista simple.
// - Escalabilidad: Reemplazar por una DB real (SQL/NoSQL) para grandes volúmenes.
// - Mantenibilidad: Agregar índices o métodos de búsqueda para mejor acceso.
// - Seguridad: Cifrar datos y usar control de acceso en un entorno real.

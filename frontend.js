// ---- Frontend (Simulación de la interfaz de usuario) ----
const Frontend = {
  // Simula un formulario en el navegador
  renderForm() {
    console.log("Frontend: Mostrando formulario...");
    const taskInput = "Estudiar para el examen"; // Simula entrada del usuario
    this.submitTask(taskInput); // Envia la tarea al backend
  },

  submitTask(taskName) {
    console.log(`Frontend: Enviando tarea al backend: ${taskName}`);
    // Llama al backend (simulado, en un entorno real se importaría)
    const response = Backend.handleTask(taskName);
    console.log(`Frontend: Respuesta del backend: ${response}`);
  }
};

// Ejecución (solo para simulación)
Frontend.renderForm();

// Comentario Frontend:
// - Función: Renderiza un formulario simulado y envía la tarea al backend.
// - Escalabilidad: Integrar con React/Vue para múltiples usuarios.
// - Mantenibilidad: Separar renderizado y lógica de envío en módulos.
// - Seguridad: Sanitizar entradas para evitar inyecciones (ej. XSS).

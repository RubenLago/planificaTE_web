/* variables de los cinco botones dinámicos */
let listaTareas = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
let btnPrioridad = document.querySelector('#escribirPrioridad');
let btnAgregarTarea = document.querySelector('#btnAgregar');


const tareas = new Array(
    new Tarea('contestar a los correos electrónicos del trabajo y escribe a Fernando para planificar la semana', 'alta'),
    new Tarea('hacer reservas para las vacaciones de Septiembre, mirar camping y coche de alquiler', 'media'),
    new Tarea('cambiar cita médica del jueves con el traumatólog', 'media'),
    new Tarea('llamar al seguro para mantenimiento calefacción', 'alta'),
)

function pintarTarea(pLista) {
    pLista.forEach(element => element.mostrarTarea(listaTareas));
}

pintarTarea(tareas)
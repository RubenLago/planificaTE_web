/* variables de los cinco botones dinámicos */
let listaTareas = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
/* capturar prioridad x hacer */
let btnAgregarTarea = document.querySelector('#btnAgregar');

//Eventos
btnAgregarTarea.addEventListener('click', agregarTarea);
inputEscribirTarea.addEventListener('click', comprobarTarea);


//Funciones
function agregarTarea() {
    alert('hola')
};
function comprobarTarea() {
    alert('hey')
};
function eliminarTarea() {
    alert('comprobando')
};


/* borrar los  li */
for (let index = 0; index < listaTareas.children.length - 1; index++) {
    listaTareas.children[index].addEventListener('click', eliminarTarea)

}

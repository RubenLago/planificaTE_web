/* variables de los cinco botones dinámicos */
let listaTareas = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
let btnPrioridad = document.querySelector('#escribirPrioridad');
let btnAgregarTarea = document.querySelector('#btnAgregar');


/* 
btnAgregarTarea.addEventListener('click', () => {
    if (inputEscribirTarea.value !== "" && btnPrioridad.value !== "") //probar con .value
        new Tarea = {
            inputEscribirTarea.value, //con super.
            btnPrioridad.value,
        }
    // Tarea.push(new Tarea) //NO TIENE SENTIDO
    //NO FUNCIONA

}) */
function agregarTarea() {
    btnAgregarTarea.addEventListener('clic', agregarTarea)
    if (inputEscribirTarea !== "" && btnPrioridad !== "") {

    }
}



function pintarTarea(pLista) {
    pLista.forEach(element => element.mostrarTarea(listaTareas));
}

pintarTarea(tareas)
agregarTarea(tareas)

/*
//Eventos
btnAgregarTarea.addEventListener('click', pintarTarea);
inputEscribirTarea.addEventListener('click', comprobarTarea); */
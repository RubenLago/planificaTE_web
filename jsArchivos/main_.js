/* variables de los cinco botones dinámicos */
let listaTareas = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
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

function pintarTareas(pLista) {
    pLista.forEach(element => pLista[element.titulo].push)

}

function agregarTarea() {
    btnAgregarTarea.addEventListener('clic', agregarTarea)
    if (inputEscribirTarea !== "" && btnPrioridad !== "") {

    }
}

/* optener el valor del elemento seleccionado del select */
let listaPrioridades = document.getElementById('#escribirPrioridad');
let valorPrioridad = listaPrioridades.options[listaPrioridades.selectedIndex].value; //valor de la opcion seleccionada
switch (valorPrioridad) {
    //case 1: //acceder a los estilos de i
}


pintarTareas(tareas)
agregarTarea(tareas)

/*
//Eventos
btnAgregarTarea.addEventListener('click', pintarTarea);
inputEscribirTarea.addEventListener('click', comprobarTarea); */
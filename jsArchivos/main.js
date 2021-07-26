/* variables de los cinco botones dinámicos */
let listaTareasHtml = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
/* capturar prioridad x hacer */
let btnAgregarTarea = document.querySelector('#btnAgregar');
let marcarPrioridad = document.querySelector('#escribirPrioridad')

//Eventos

inputEscribirTarea.addEventListener('click', comprobarTarea);


pintarLista(listaDeTareas, listaTareasHtml)

function comprobarTarea() {
    /* volver al placehoder inicial despues de la alerta..y desactivar el color rojo */
    inputEscribirTarea.setAttribute("placeholder", "Añade una tarea nueva");
    inputEscribirTarea.setAttribute('style', 'color: black');
}




/* btnAgregarTarea.addEventListener('click', agregarTarea); */
let contadorId = 4;
btnAgregarTarea.addEventListener('click', () => {

    if (inputEscribirTarea !== "" && marcarPrioridad !== "") {
        let newTarea = {
            id: contadorId,
            titulo: inputEscribirTarea.value,
            prioridad: marcarPrioridad.value
        }

        listaDeTareas.push(newTarea);
        pintarLista(listaDeTareas, listaTareasHtml);
        contadorId++

    } else {
        alert('entra al alert')
    }
    inputEscribirTarea.value = "";
    marcarPrioridad.value = "";
    //rellena la array pero no pinta, como si un campo estuviera vacío
})





function comprobarTarea() {
    /* volver al placehoder inicial despues de la alerta..y desactivar el color rojo */
    /*     inputEscribirTarea.setAttribute("placeholder", "Añade una tarea nueva");
        inputEscribirTarea.setAttribute('style', 'color: black'); */
}


function eliminarTarea(event) {
    let valorTarea = event.target.innerText
    alert("¿Quieres borrar: " + " '" + valorTarea + "' " + "?")
    event.target.parentNode.removeChild(event.target);
    console.log(event.target.dataset.id);

}
for (let index = 0; index < listaTareas.children.length; index++) {
    listaTareas.children[index].addEventListener('click', eliminarTarea)
}


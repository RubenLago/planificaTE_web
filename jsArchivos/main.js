//capturar botones
let listaTareasHtml = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
let btnAgregarTarea = document.querySelector('#btnAgregar');
let marcarPrioridad = document.querySelector('#escribirPrioridad')



pintarLista(listaDeTareas, listaTareasHtml)


/* rellena los campos input-tareas e select */
let contadorId = 4;
btnAgregarTarea.addEventListener('click', () => {

    if (inputEscribirTarea.value !== "" && marcarPrioridad.value !== "") {
        let newTarea = {
            id: contadorId,
            titulo: inputEscribirTarea.value,
            prioridad: marcarPrioridad.value
        }

        listaDeTareas.push(newTarea);
        pintarLista(listaDeTareas, listaTareasHtml);
        contadorId++
        inputEscribirTarea.setAttribute("placeholder", "Añade una tarea");
        inputEscribirTarea.setAttribute('style', 'color: black');

    } else {
        inputEscribirTarea.setAttribute("placeholder", "DEBES RELLENAR TODOS LOS CAMPOS!!");
        inputEscribirTarea.setAttribute('style', 'color: red');
    }
    inputEscribirTarea.value = "";
    marcarPrioridad.value = "";
})


function eliminarTarea(event) {
    let valorTarea = event.target.innerText
    alert("¿Quieres borrar: " + " '" + valorTarea + "' " + "?")
    event.target.parentNode.removeChild(event.target);
    console.log(event.target.dataset.id);

}
for (let index = 0; index < listaTareas.children.length; index++) {
    listaTareas.children[index].addEventListener('click', eliminarTarea)
}



//filtrar por prioridad
let filtroPrioridad = function (pLista, pPrioridad) {
    let filtrarLista = pLista.filter()
}


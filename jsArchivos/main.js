//capturar botones
let listaTareasHtml = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
let btnAgregarTarea = document.querySelector('#btnAgregar');
let marcarPrioridad = document.querySelector('#escribirPrioridad');
let filtroTexto = document.querySelector('#filtroText');


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
let filtroPrioridad = document.querySelector('#filtrarPrioridad')

filtroPrioridad.addEventListener('click', e => {

    if (e.target.value == 'alta') {
        filtrarPorPrioridad(listaDeTareas, 'alta');
    } else if (e.target.value == 'media') {
        filtrarPorPrioridad(listaDeTareas, 'media');
    } else if (e.target.value == 'baja') {
        filtrarPorPrioridad(listaDeTareas, 'baja');
    } else if (e.target.value == '')
        alert('Debes seleccionar un filtro');

})

function filtrarPorPrioridad(pLista, pPrioridad) {
    let listraFiltradaPrio = pLista.filter(item => item.prioridad == pPrioridad);
    pintarLista(listraFiltradaPrio, listaTareasHtml)
}


//filtrar texto
filtroTexto.addEventListener("input", e => {
    let texto = e.target.value;
    let listraFiltradaTexto = listaDeTareas.filter(item => item.titulo.toLowerCase().includes(texto.toLowerCase()));
    pintarLista(listraFiltradaTexto, listaTareasHtml)
});

//localStorage, clave:valor
if (localStorage.getItem('titulo') === null) {
    let tituloLocal = localStorage.setItem('titulo', JSON.stringify(listaDeTareas))
} else {
    tituloLocal = JSON.parse(localStorage.getItem('titulo'))
}

localStorage.setItem('titulo', JSON.stringify(listaDeTareas));
pSeccion.innerHTML = tituloLocal.length;







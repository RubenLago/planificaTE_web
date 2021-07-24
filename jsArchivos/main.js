


//Eventos
btnAgregarTarea.addEventListener('click', agregarTarea);
inputEscribirTarea.addEventListener('click', comprobarTarea);


//Funciones
function agregarTarea() {
    let contadorId = 0;
    if (inputEscribirTarea !== "" && btnPrioridad !== "") {
        tareas = {

        }
        /* mejorar este push */

        let nuevaTarea = document.createElement('li');
        let iconoTe = document.createElement('i'); //pensar como colocar dentro del li el icono
        let contenido = document.createTextNode(tareas.titulo);
        tareas.push
        contadorId++
    } else {
        inputEscribirTarea.setAttribute("placeholder", "Debes agregar una tarea");
        inputEscribirTarea.setAttribute('style', 'color: red'); //quiero que no afecta al color de la tarea,solo como alerta >> solucionado con la funcion comprobar tarea .
    }

    /* alert(tarea)  ok devuelve valor*/


    /*ya usada
     if (tarea === "") {
        inputEscribirTarea.setAttribute("placeholder", "Debes agregar una tarea");
        inputEscribirTarea.setAttribute('style', 'color: red'); //quiero que no afecta al color de la tarea,solo como alerta >> solucionado con la funcion comprobar tarea .
    } */
    nuevaTarea.appendChild(contenido);
    listaTareas.appendChild(nuevaTarea);

    /* limpiar campo al agregar una tarea */
    inputEscribirTarea.value = "";

    /* recorremos los li del ul(parentNode) y borramos el elemento sobre el que está el evento */
    /* solo funciona al agregar una tarea, con la recarga no borra >>> solucionado con funcion eliminarTarea */
    for (let index = 0; index <= listaTareas.children.length; index++) {
        listaTareas.children[index].addEventListener('click', function () {
            let valorTarea = this.textContent
            alert("¿Quieres borrar " + valorTarea + "?")
            /* como cambiar el estilo del alert!! */
            this.parentNode.removeChild(this)
        })
    }

}

function eliminarTarea() {
    let valorTarea = this.textContent
    alert("¿Quieres borrar " + valorTarea + "?")
    this.parentNode.removeChild(this)
}


function comprobarTarea() {
    /* volver al placehoder inicial despues de la alerta..y desactivar el color rojo */
    inputEscribirTarea.setAttribute("placeholder", "Añade una tarea nueva");
    inputEscribirTarea.setAttribute('style', 'color: black');



}


function pintarTarea() {

}


/* borrar los  li */
for (let index = 0; index < listaTareas.children.length - 1; index++) {
    listaTareas.children[index].addEventListener('click', eliminarTarea)
}

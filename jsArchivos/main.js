/* variables de los cinco botones dinámicos */
let listaTareas = document.querySelector('#tareasJs'); //ul
let inputEscribirTarea = document.querySelector('#escribirTarea');
let btnPrioridad = document.querySelector('#escribirPrioridad');
let btnAgregarTarea = document.querySelector('#btnAgregar');

/* array de tareas */
let tareas = new Array(
    {
        'id': 1,
        'titulo': 'contestar a los correos electrónicos ',
        'prioridad': 'alta'
    },
    {
        'id': 2,
        'titulo': 'hacer reservas para las vacaciones de Septiembre',
        'prioridad': 'media'
    },
    {
        'id': 3,
        'titulo': 'cambiar cita médica del jueves 29',
        'prioridad': 'alta'
    },
    {
        'id': 4,
        'titulo': 'llamar al seguro para mantenimiento calefacción',
        'prioridad': 'alta'
    },
)

//Eventos
btnAgregarTarea.addEventListener('click', agregarTarea);
inputEscribirTarea.addEventListener('click', comprobarTarea);


//Funciones
function agregarTarea() {
    let contadorId = 0;
    if (inputEscribirTarea !== "" && btnPrioridad !== "") {
        tareas = {
            'id': contadorId,
            'titulo': inputEscribirTarea.value,
            'prioridad': btnPrioridad.value,
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

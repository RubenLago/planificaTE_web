class Tarea {

    constructor(pTitulo, pPrioridad,) {
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
        this.id = "";
        this.completado = false;
    }

    mostrarTarea(pSection) {
        pSection.innerHTML += `<li><i class="fas fa-mug-hot"
     ></i>${this.titulo}</li> `;
    }

    eliminarTarea() {
        let valorTarea = this.textContent
        alert("¿Quieres borrar " + valorTarea + "?")
        this.parentNode.removeChild(this)
    }


    comprobarTarea() {
        /* volver al placehoder inicial despues de la alerta..y desactivar el color rojo */
        inputEscribirTarea.setAttribute("placeholder", "Añade una tarea nueva");
        inputEscribirTarea.setAttribute('style', 'color: black');
    }




}

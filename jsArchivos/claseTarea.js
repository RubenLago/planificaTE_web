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
}

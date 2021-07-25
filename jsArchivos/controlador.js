function pintarLista(pLista, pSeccion) {
    pSeccion.innerHTML = "";
    pLista.forEach(item => {
        if (item.prioridad === 'alta') {
            pSeccion.innerHTML +=
                `<li><i class="fas fa-mug-hot" style="color:red;"></i>${item.titulo}</li> `
        } else if (item.prioridad === 'media') {
            pSeccion.innerHTML +=
                `<li><i class="fas fa-mug-hot" style="color:blue;"></i>${item.titulo}</li> `
        } else if (item.prioridad === 'baja') {
            pSeccion.innerHTML +=
                `<li><i class="fas fa-mug-hot" style="color:white;"></i>${item.titulo}</li> `
        } else {
            return comprobarTarea()
        }
    });


}
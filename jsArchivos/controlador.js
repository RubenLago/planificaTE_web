function pintarLista(pLista, pSeccion) {
    console.log(listaDeTareas)
    pSeccion.innerHTML = "";
    listaDeTareas.forEach(item => {
        console.log(item);
        if (item.prioridad === 'alta') {
            pSeccion.innerHTML +=
                `<li data-id="${item.id}"><i class="fas fa-mug-hot" style="color:red;"></i>${item.titulo}</li> `
        } else if (item.prioridad === 'media') {
            pSeccion.innerHTML +=
                `<li data-id="${item.id}"><i class="fas fa-mug-hot" style="color:blue;"></i>${item.titulo}</li> `
        } else if (item.prioridad === 'baja') {
            pSeccion.innerHTML +=
                `<li data-id="${item.id}"><i class="fas fa-mug-hot" style="color:white;"></i>${item.titulo}</li> `
        }
    });


}
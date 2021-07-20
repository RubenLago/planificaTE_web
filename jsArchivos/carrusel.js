let imagen = document.querySelector('div.carruselFrases img');
let botones = document.querySelectorAll('button')
botones.forEach(boton => boton.addEventListener('click', moverFrases));
let imagenActual = 1;

function moverFrases(event) {
    imagenActual = (event.target.innerText === "+") ? imagenActual + 1 : imagenActual - 1;
    if (imagenActual <= 0) {
        imagenActual = 3;
    } else if (imagenActual > 5) {
        imagenActual = 1;
    }
    cambiarImagen(imagenActual);
}

function cambiarImagen(pImagen) {
    imagen.src = `img/frase_${pImagen}.png`;
}
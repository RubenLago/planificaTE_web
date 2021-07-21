/* cargar contenido imagenes cuando cargue la página */
window.addEventListener('load', function () {

    /* console.log("el contenido a cargado") */
    const frases = [];
    frases[0] = 'img/frase_1.png';
    frases[1] = 'img/frase_2.png';
    frases[2] = 'img/frase_3.png';
    frases[3] = 'img/frase_4.png';
    frases[4] = 'img/frase_5.png';

    var i = 0;

    function rotarFrases() {
        document.slider.src = frases[i];
        if (i < 4) {
            i++
        } else {
            i = 0
        }
    }
    setInterval(rotarFrases, 3000)

})

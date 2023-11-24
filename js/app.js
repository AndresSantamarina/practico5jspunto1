/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/
const botonComenzarJuego = document.querySelector('#btnComenzar');
const formularioNumero = document.querySelector('form');
//Inicializo el nro en 0 para así poder salir del juego
let nroAleatorio = 0;

function comenzarJuego() {
    nroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(nroAleatorio)
    //Si usaba innerHTML en vez de innerText, el color del botón se cambiaba después del segundo clic, por qué pasa eso?
    if (botonComenzarJuego.innerText === 'Comenzar') {
        botonComenzarJuego.innerHTML = 'Dejar de jugar';
        botonComenzarJuego.className = 'btn btn-danger';
    } else {
        botonComenzarJuego.innerHTML = 'Comenzar';
        botonComenzarJuego.className = 'btn btn-outline-success';
        nroAleatorio = 0;
    }
}

function adivinarNumero(e) {
    e.preventDefault();
    console.log('funcion adivinar numero');
    const inputNumero = document.querySelector('input');
    console.log(inputNumero.value);
    console.log(nroAleatorio)
    if (nroAleatorio === 0) {
        alert('Haga clic en comenzar para poder jugar')
    } else if (inputNumero.value < nroAleatorio) {
        alert('El número es mayor')
    } else if (inputNumero.value > nroAleatorio) {
        alert('El número es menor')
    } else {
        alert('Adivinaste el número');
        botonComenzarJuego.innerHTML = 'Comenzar';
        botonComenzarJuego.className = 'btn btn-outline-success';
        nroAleatorio = 0;
    }
    formularioNumero.reset();
}

botonComenzarJuego.addEventListener('click', comenzarJuego);
formularioNumero.addEventListener('submit', adivinarNumero);
/// <reference types="jquery"/>

let clipboard = new Clipboard('.colores i');

let colorPersonalizado = {
    "rojo": '128',
    "verde": '128',
    "azul": '128',
    "alfa": '1'
};

$('input').on('change', function(){
    modificarColorPersonalizado(this);
    actualizarColorFondo();
    actualizarTextos(this);
});

$('.colores i').on('click', () => {
    mostrarMensaje();
    ocultarMensaje();
});


// INPUTS RANGO
function modificarColorPersonalizado(input) {
    colorPersonalizado[input.classList[0]] = input.value;
}

function actualizarColorFondo(){
    $('body').css("background-color",
    `rgba(${colorPersonalizado.rojo}, ${colorPersonalizado.verde}, ${colorPersonalizado.azul}, ${colorPersonalizado.alfa})`);
}

function actualizarTextos(input){
    const claseInput = input.classList[0];
    $(`section .valor-${claseInput}`).text(`${colorPersonalizado[claseInput]}`);
    $(`#${claseInput}`).text(`${colorPersonalizado[claseInput]}`);
}


// BOTON PORTAPAPELES
function mostrarMensaje(){
    $('.container .mensaje').removeClass("opacity-0");
}

function ocultarMensaje(){
    setTimeout(() => {
        $('.container .mensaje').addClass("opacity-0");
    }, 1000);
}

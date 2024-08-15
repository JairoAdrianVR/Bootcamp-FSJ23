console.log('Hola test');
var btnApretame = document.getElementById('btnApretame');
var textSaludo = document.querySelector('#textHolis');
textSaludo.innerHTML = "Definitivamente si volvimos de vacaciones";
console.log(textSaludo);
btnApretame.addEventListener('click', function (event) {
    event.preventDefault();
    alert("Felicitaciones, aprestaste el boton. Te ganaste un auto 0KM");
});

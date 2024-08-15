console.log('Hola test');

const btnApretame = document.getElementById('btnApretame') as HTMLButtonElement;
const textSaludo = document.querySelector('#textHolis') as HTMLElement;
textSaludo.innerHTML = "Definitivamente si volvimos de vacaciones";

console.log(textSaludo);

btnApretame.addEventListener('click', (event:MouseEvent)=> {
    event.preventDefault();
    alert("Felicitaciones, aprestaste el boton. Te ganaste un auto 0KM");
})
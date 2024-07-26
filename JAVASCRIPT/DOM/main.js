//Agarrar los elementos que nos interesan del DOM
const contenedor = document.querySelector('div');
console.log(contenedor);
const botonApretable = document.getElementById('btnApretame');
const botonAsync = document.getElementById('btnAsync')

//Obtenemos el primer HIJO del contenedor
console.log(contenedor.firstElementChild);
const primerH1 = contenedor.firstElementChild;
console.log(primerH1.innerText);

//Cambiamos el texto de un elemento HTML 
primerH1.innerText = "Holiwis"

//Retona el primer elemento que coincida con ese ID
//const container = document.getElementById('container')
//container.style.backgroundColor = "grey";
/*
FUNCION EXPRESADA 
function meAprestaste() {
    console.log("HEY QUE TOCAS? ANDA PA YA");
}*/

//meAprestaste();

//Manipulamos EVENTOS del DOM
botonApretable.addEventListener('click',() => {
    primerH1.innerText = "Hola Emma";
    if(primerH1.style.color == "black"){
        primerH1.style.color = "blue"
    }else{
        primerH1.style.color = "black"
    }
})


//Ingresar datos a traves del DOM
//let dato = prompt("Ingresa tu nombre");
//console.log(dato);

//Enviar alertas
//alert("Me prestas un ratito tus datos?")


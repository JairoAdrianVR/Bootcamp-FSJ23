
//Primitivos
// String,Float,Number,Boolean

// Array 
// Inicializacion de arrays

let array1 = new Array();
let array2 = [0,1,2,3,4];

// METODOS DE ARRAYS
//Agregar datos al final de un array
array2.push(3);

//Eliminar datos del final de un array
array2.pop()

//Agregar datos al inicio de un array
array2.unshift(0)

//Eliminar dato del inicio de un array
array2.shift()

console.log(array2);

//metodo Map utiliza un callback
array2.map( ( valor ) => {  console.log(valor);  })

for(let i = 0; i<array2.length; i++){
    console.log(array2[i]);
}

//Foreach recorre el array y hace algo con el valor de cada posicion
//foreach( ArrayARecorrer )
/*foreach(array2 as valor ){

}*/

//Programacion orientada o Objetos
// Se basa en crear un modelo del problema de destino en su programa
// Es un paradigma que se basa en el concepto de clases y objetos
// Es una forma de programar la cual intenta resolver los problemas a traves de moldes

//Clases y Objetos
//Clase -> Es un molde (genera una forma) para que todos los objetos salgan iguales
//Objeto -> Es lo que creamos en base a un molde 

//Creamos una clase
class Persona{
    
    //constructor -> Metodo reservado para la creacion de objetos de esta clase
    constructor(nombre,edad){
        //Atributos o propiedades-> Caracteristicas propias de ese tipo de objeto
        this.nombre = nombre;
        this.edad = edad;
    }

    //Metodos -> Acciones propias de ese tipo de objeto
    correr(){
        console.log("Soy " + this.nombre +" y estoy corriendo.");
    }
}

//INSTANCIAR UN OBJETO -> Crear un objeto
let marcial = new Persona("Marcial Ordonez",20);

//Acceder a un atributo(propiedad) de un objeto
marcial.nombre = "Marcial Ordoñez";

console.log(marcial);
marcial.correr();


//Objetos literales
let marcela = {
    //Clave valor
    nombre: "Marcela Orellana",
    edad: 20
}

console.log(marcela.nombre);

let array3 = [
    {nombre: "Marcela Orellana",
    edad: 20},
    {nombre: "Jorge Diaz",
    edad: 20}
];

console.log(array3[0].edad);
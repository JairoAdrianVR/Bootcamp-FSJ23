/**
 * Repetir un bloque
 * for
 * while
 * do while
 * foreach
 */

//coleccion datos (arreglo de objetos)
let arreglo_empleados = [
    {
        nombre: "Judith",
        categoria: "A",
        sueldo: 750
    },
    {
        nombre: "Xander",
        categoria: "C",
        sueldo: 605
    },
    {
        nombre: "Jorge",
        categoria: "B",
        sueldo: 810
    }
]

//CICLO => (for, while, do while) => contador, condicion (para finalizar el contador), incremento / decremento del contador
/**
 * contador = contador + 1 (contador++)
 */
/*
for(let contador = 1; contador <= 10; contador++){
    console.log(contador);
}

//utilizando for para iterar el arreglo
/**
 * length => devuelve el tamaño de un arreglo o cadena
 * para acceder a una posicion del arreglo se utiliza [numero posicion] = [0]
 * para acceder a una propiedad del objeto se utiliza el punto (.)
 */

let aumento_salario = 0;
for(let posicion = 0; posicion < arreglo_empleados.length; posicion++){
    //accediendo al sueldo de los empleados del arreglo
    let salario = arreglo_empleados[posicion].sueldo 
    
    //switch - if else if else
    switch(arreglo_empleados[posicion].categoria){
        case "A":
            aumento_salario = salario + (salario * 0.15)
        break;
        case "B":
            aumento_salario = salario + (salario * 0.30)
        break;
        case "C":
            aumento_salario = salario + (salario * 0.10)
        break;
        case "D":
            aumento_salario = salario + (salario * 0.20)
        break;
        default:
            aumento_salario = 0
    }

    //accediendo al nombre de los empleados del arreglo
    console.log(arreglo_empleados[posicion].nombre);
    console.log("Sueldo anterior: " + salario);
    console.log("Sueldo con aumento: " + aumento_salario);
}


//Imprimir todos los datos de un array con un bucle


//While
//mientras (se cumpla esto) { hace esto}
/*
while(contador < longanismo){
    console.log(arraycito[contador]); //2
    contador++; // 3
    }
   
   //Do While HACER MIENTRAS

do{
    console.log(arraycito[contador]); //3
    contador++;//4
}while(contador < longanismo && contador >= 3) //1 < 6*/

//1era vuelta
//INICIALIZACION -> CONDICION -> EJECUCION -> incremento

//2da vuelta
//CONDICION -> EJECUCION -> INCREMENTO
/*let auxiliar = 0;

for(let i = 0; i < longanismo;i++ ){
    console.log(arraycito[i]);
    auxiliar++;
}
console.log(auxiliar);

let arraycito = [1,2,3,4,5,6];

let longanismo = arraycito.length; //3
let contador = 0;

//Imprimir el array de forma descendente
for(let i = longanismo-1; i>=0; i++){
    console.log(arraycito[i]); //
}
longanismo //3


function sumar(a,b){
    return a+b;
}

//Realizar una funcion la cual me permita realizar una de las operaciones matematicas basicas a eleccion
//considerando dos numeros. (suma, resta, multiplicacion y division)
//Y me permita elegir

function operando2Numeros(a,b,operacion){

    //Solucion 1 
    switch (operacion) {
        case '+':
              x = a + b;
              console.log(`a mas b = ${x}`);
              break;
        case '-':
              x = a - b;
              console.log(`a menos b = ${x}`);
              break;
        case '*':
              x = a * b;
              console.log(`a por b = ${x}`);
              break;
        case '/':
              x = a / b;
              console.log(`a entre b = ${x}`);
              break;    
        default:
          console.log(`Perdon, no se que es ${operacion}.`);
      }

      //Solucion 2

      if(operacion==="sumar"){
          return (a+b)
      }else if(operacion==="restar"){
          return (a-b)
      } else if(operacion==="multiplicar"){
          return (a*b)
      }
}*/


//Callback -> Funcion que se pasa como parametro a otra funcion
/*
function saludar(){
    console.log("Holiwi");
}
//saludar();
function despedir(){
    console.log("Te quedaste sin trabajo");
}

function iniciarSesion(callback){
    callback();
}
iniciarSesion(saludar)
iniciarSesion(despedir)


//Funciones anonimas -> Funciones sin nombre
iniciarSesion(function () {
    console.log("Soy parte de anonimus");
})

let jorgito = function () {

}

iniciarSesion(() => {
    console.log("Soy una funcion flecha y soy anonima");
})
*/
/*
function despedidaUsuario(nombreUsuario){
        console.log("Siempre me dejan solo por burro adios "+nombreUsuario);
}

function cerrarSesion(usuario,callback){
    callback(usuario);
};

cerrarSesion("Jairo",despedidaUsuario)

despedidaUsuario("Jairo")

//Funcion tipo Void -> Es una funcion VACIA

function tipoVoid(){
    console.log(1+1);
}

function tipoNumero(){
    return 1+1
}

//Guardamos los datos para que vivan un rato
let resultadoFuncioncita = tipoVoid();
let resultadoFuncioncitaNumero = tipoNumero();
console.log(resultadoFuncioncita); //undefined
console.log(resultadoFuncioncitaNumero+2);
*/
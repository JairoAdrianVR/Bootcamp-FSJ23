//Declaracion de variables y constantes
/**
 * comentarios largos
 * 
 */

/**
 * declarar una variable: let, var
 * ambito de la variable
 */
/**
 * declarar, llamar variable
 */
let edad = 18; //int
//let edad = 23;
edad = 23;
var saludo = "Hola!"; //string
var saludo = "Adios!";
//var es mas global
let decimal = 34.5; //float o double
let boolean = true; //false
let nul = null; //tipo de dato nulo
//declarando un objeto
let persona = {
    nombre: "Judith",
    edad: 20,
    telefono: 6543125,
    completado: false
}

//declarando un arreglo(coleccion de datos)
let frutas = ["manzana","uvas","naranja"]
console.log(frutas);

let resultado = 23.4555555555555; //23.46
// Math.round(resultado); 
console.log(resultado);
console.log(Math.round(resultado));
console.log(resultado.toFixed(3))
console.log(cadena);

let cadena = "Holaaaaaaaaaaaaaaaaaaa";

votar()

//funciones / metodos
/**
 * es un bloque de codigo donde generamos una accion
 */
function votar(){
    /**
     * Las variables let trabajan a nivel de bloque
     */
    console.log("Para votar debes de ingresar tu edad");
}
votar()

//FUNCIONES DECLARATIVAS
function calcularAreaTriangulo(){
    let altura = 80.5;
    let base = 20;
    let resultado = (base * altura) / 2;
    //concatenamos la variable con el signo (+)
    console.log("El area del triangulo es: " + resultado);
}
calcularAreaTriangulo()

//funciones con parametros (typescript)
function calcularAreaTrianguloParametros(altura, base){
    let resultado = (base * altura) / 2;
    //console.log("El area del triangulo es: " + resultado);
    return resultado
}
//pasando los argumentos (altura, base)
document.write(calcularAreaTrianguloParametros(50.10, 35)) //html
calcularAreaTrianguloParametros(123.45, 90.5)

calcularAreaFlecha()

//Funciones de tipo flecha (react)
const calcularAreaFlecha = (altura, base) => {
    let resultado = (base * altura) / 2;
    //console.log("El area del triangulo es: " + resultado);
    return resultado
}
console.log(calcularAreaFlecha(20,10));


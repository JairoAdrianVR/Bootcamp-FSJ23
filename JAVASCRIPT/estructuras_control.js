/**
 * Estructuras de control
 * Son estructuras que nos permiten modificar el proceso en el codigo
 * estructuras condicionales
 * estructuras repetitivas (bucles)
 */

//ESTRUCTURAS CONDICIONALES
/**
 * if-else: evalua una condicion
 * if-else if-else
 * switch
 * operador ternario
 */

/***
 * verificar si el numero esta en el rango de 15 a 150 "estas en el rango" / "no estas rango"
 */

function verificarNumero(numero){
    //16 al 149
    //numero > 15 && numero < 150
    /**
     * operador AND (&&) => es cuando todas las condiciones se cumplen devuelve true
     * operador OR (||) => con tal que se cumpla una condicion devuelve true
     */
    if(numero >= 15 && numero <= 150){
        return "Estas en el rango"
    }else{
        return "No estas en el rango"
    }
}
//propmt => es una funcion donde el usuario puede ingresar un valor desde el navegador
// let solicitar_numero = prompt("Ingresa un numero")
// console.log(verificarNumero(solicitar_numero));

function verificarNumeroOperadorTernario(numero){
    return numero >= 15 && numero <= 150 ? "Estas en el rango" : "No estas en el rango"; 
}
// let solicitar_numero = prompt("Ingresa un numero")
// console.log(verificarNumeroOperadorTernario(solicitar_numero));

/**
 * 
 */
function calcularDescuento(cantidadCafes) {
    const precioCafe = 2.75;
    let total = cantidadCafes * precioCafe;
    let descuento = 0;

    if(cantidadCafes >= 5 && cantidadCafes < 10) {
        descuento = 0.10;
    }else if (cantidadCafes >= 10 && cantidadCafes < 20) {
        descuento = 0.20;
    }else if (cantidadCafes >= 20) {
        descuento = 0.40;
    }else{
        descuento = 0;
    }

    let resultado = total - (total * descuento)
    return "Total a pagar: $" + resultado;
}
// let cantidadCafes = prompt("Ingrese la cantidad de cafes");
// console.log(calcularDescuento(cantidadCafes));

function calcularAumentoSalario(categoria, sueldo){
    let aumento = 0;
    let sueldo_total = 0;
    /**
     * condicionales = casos
     */
    switch(categoria){
        case "A":
            //code..
            aumento = sueldo * 0.15
            sueldo_total = Number(sueldo) + Number(aumento)
        break;
        case "B":
            //code..
            aumento = sueldo * 0.30
            sueldo_total = Number(sueldo) + Number(aumento)
        break;
        case "C":
            //code..
            aumento = sueldo * 0.10
            sueldo_total = Number(sueldo) + Number(aumento)
        break;
        case "D":
            //code..
            aumento = sueldo * 0.20
            sueldo_total = Number(sueldo) + Number(aumento)
        break;
        default:
            return "Ingresa una categoria correcta";
    }

    return "Tu aumento de salario es: $" + aumento + " Tu salario actual es: $" + sueldo_total
}

let categoria_value = prompt("Ingrese una categoria")
let sueldo_value = prompt("Ingresa tu salario")
console.log(calcularAumentoSalario(categoria_value, sueldo_value));




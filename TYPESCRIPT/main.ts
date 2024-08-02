//Sintaxis JS vs TS

//Declaracion de variables en JS
let nombre = "Jairo";
let suma = 1+"15";

//Declaracion de variable en Tipado Duro
let string:string = "Jairo";
let number:number = 1;
let boolean:boolean = true;
let array:[] = [];

//Declaracion de variable de tipo Array de NUMEROS
let arrayNumber:number[] =[1.2,1];
let arrayString:string[] = ["0"];

//Declaracion de Tuplas
let arrayTupla: [number,string,number];
arrayTupla= [1,"",3];

//Declaracion de Funciones
function saludar() : void {
    console.log("Holi");
}

function sumar() :number {
    return 2+2;
}


function restar(a:number, b:number) :number{
    return a-b;
}



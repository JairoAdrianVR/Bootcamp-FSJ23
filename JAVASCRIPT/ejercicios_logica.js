//Dado un array de enteros sumar los elementos pares y devolver si esta suma es mayor a 20

let array = [15,40,20,57,25,17,10];

function arrayPares(arraycito){
    let sumaPares = 0; //variable auxiliar

for(let i = 0; i< arraycito.length; i++){
    //Obtenemos el numero de cada posicion y 
    //console.log(arraycito[i]);
    //vemos si es par
    if(arraycito[i] % 2 == 0){
        //Guardamos la suma de todos los numeros pares
        sumaPares = sumaPares +  arraycito[i]; 
    }
}

//vemos si es mayor a 20
if(sumaPares > 20){
    return "Si es mayor";
}else{
    return "No es mayor";
}
}

console.log(arrayPares(array));



//Number vs String

function sumar(a,b){
    return a+b;
}

console.log(sumar(5,5));
console.log(sumar(5,"5"));

//El + es operador matematico 
//El + es operador para concatenar

/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.
*/

let string1 = "asdasd ";

console.log(string1.trim().length);

function ShortLongShort(a,b){
    //Averiguamos el largo de los Strings
    largoA = a.length;
    largoB = b.length;
    
    if(largoA == 0 || largoB == 0){
        return "Que gracioso que sos";
    }

    if(largoA < largoB){
        return a+b+a;
    }else{
        return b+a+b;
    }

}

console.log(ShortLongShort("","22"));
console.log(ShortLongShort("22","1"));


// FizzBuzz
//Escribir un programa que imprima los numeros del 1 al 100
//Si el numero es multiplo de 5 imprima Buzz
//Si el numero es multipo de 3 imprima Fizz
//Si es multiplo de ambos imprima FizzBuzz
//Caso contrario imprimir el numero

function FizzBuzz(){
    //Write ur code here
    for(let i = 0; i <=100; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }else if(i % 5 == 0){
            console.log("Buzz");
        }else if(i%3 == 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}

FizzBuzz();


function FizzBuzzArray(arr){
    //Write ur code here

    //Forma 1 
    let arraycito = [];
    for(let i = 0; i < arr.length; i++){

        if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
            arraycito.push("FizzBuzz");
        }else if(arr[i]% 5 == 0){
            arraycito.push("Buzz");
        }else if(arr[i]%3 == 0){
            arraycito.push("Fizz");
        }else{
            arraycito.push(arr[i]);
        }
    }
    console.log(arraycito);
}

FizzBuzzArray([1,2,3,4,5,6,7,15,18,21])

// Crear una funcion que tomando un array de enteros y un numero limite.
// Devolver un array que contenga solo numeros mayores a el numero limite
// EL EJERCICIO SE DEBE RESOLVER SIN UTILIZAR EL BUCLE FOR Y EL METODO MAP

let array3 = [15,10,8,5,73,30,4];

function arrayNumeroMayorConMetodo(array,x){
    return array.filter( numero => numero > x);
}

console.log(arrayNumeroMayorConMetodo(array3,5));

function arrayNumeroMayor(array,x){
   //Code ur solution
    let i = 0;
    let resp = [];

    while(i<array.length){

        if(array[i]>x){
            resp.push(array[i])
        }
        i++;
    }

    //array.map((numero)=>{ if(numero>x){resp.push(numero)}})
    return resp;
}

console.log(arrayNumeroMayor(array3,5));

let arr1 = [1,2,3,4];

arr1.map((valor)=>{ valor > 1 ? console.log("El valor es mayor"): console.log("El valor es menor");});

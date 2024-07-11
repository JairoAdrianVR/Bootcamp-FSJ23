
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

array2.map( ( valor ) => {  console.log(valor);  })

for(let i = 0; i<array2.length; i++){
    console.log(array2[i]);
}

//Foreach recorre el array y hace algo con el valor de cada posicion
//foreach( ArrayARecorrer )
/*foreach(array2 as valor ){

}*/


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


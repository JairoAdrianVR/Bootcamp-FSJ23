<?php 
//Detectar numeros duplicados en un array numerico
//Utilizando insertionSort o BubbleSort

function bubbleSort($array){

    if(count($array) <= 1) return $array;

    for($i =0;$i < count($array); $i++){
        
        //print("Posicion i = {$array[$i]} \n");
        for($j=0; $j < count($array)-1; $j++){
           // print("Posicion j = {$array[$j]} \n");
           // print("Posicion siguiente = {$array[$j+1]} \n");

            if($array[$j] > $array[$j+1]){
                $temp = $array[$j]; //Guardamos el valor de la posicion j -> inicial
                $array[$j] = $array[$j+1];// Cambiamos el valor de j al de la posicion siguiente
                $array[$j+1] = $temp; //guardamos el valor anterior de j en la posicion siguiente
            }
        }
    }

    return $array;
}

function duplicados($array){
   $arrayOrdenado = bubbleSort($array);

   for($i = 0; $i < count($arrayOrdenado) -1; $i++){
       if($arrayOrdenado[$i] == $arrayOrdenado[$i+1]){
            return "Existe duplicado";
        }
        //print("{$arrayOrdenado[$i]} y la siguiente es: {$arrayOrdenado[$i+1]} \n");
   }
   return("No existen duplicados");
   
}

print(duplicados([4,3,5,1,2]));


$array = [1,3,19,2,5,8];

for($i = 0; $i < 5; $i++){
    print("Recorrelo de nuevo \n");
    
    for($j = 0; $j < 9; $j++){
        print(" {$j} \n ");
    }
}




?>
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

print_r(bubbleSort([1,2,2,3,3,4,5]));


?>
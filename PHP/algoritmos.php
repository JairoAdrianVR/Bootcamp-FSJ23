<?php 
// Que es un algoritmo?
// Una serie de instrucciones para resolver un problema
// Instrucciones ordenadas
// Operaciones y procesos

// 10 -> PASOS A SEGUIR PARA AGARRAR UN CELULAR
// 

// BubbleSort -> Ordenamiento de tipo Burbuja

function bubbleSort($array){

    $length = count($array);

    if($length <= 1) return "No puedo ordenar algo tan pequeño";

    for($i = 0; $i < $length; $i++){ //Recorrer el array en su totalidad -> I
        //print("Soy I y estoy en este dato {$array[$i]} \n");

        for($j = 0; $j < $length -1 ; $j++){ // J
        //print("Soy J y estoy dato {$array[$j]} \n");
        //print("Soy J y el dato siguiente es {$array[$j+1]} \n");
            
        if($array[$j] > $array[$j+1]){
            $tempo = $array[$j];
            $array[$j] = $array[$j+1];  
            $array[$j+1] = $tempo;
        }

        }
    }
    return $array;
}

print_r(bubbleSort([2,4,6,8,1,3,2]));


// Insertion Sort 

function insertionSort($array){

    if(count($array) <= 1) return "No puedo ordenar algo tan pequeño";

    for($i = 1; $i<count($array); $i++){ 
        //print("Este es el dato de I = {$array[$i]} \n");
        //print("Este es el dato de J = {$array[$i-1]} \n");
        $key = $array[$i];
        $j = $i - 1 ;

        while($j >= 0 && $array[$j]>$key){
            $array[$j+1] = $array[$j];
            $j--;
        }     
        $array[$j+1] = $key;
    }
    return $array;
}

print_r(insertionSort([4,3,2,1,-1,-3]));

?> 
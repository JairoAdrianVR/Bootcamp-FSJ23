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
        
        $key = $array[$i]; //Guardado el dato actual -> El dato en posicion I
        $j = $i - 1 ; //Guardado la posicion anterior a I

        while($j >= 0 && $array[$j]>$key){ //j TIENE QUE SER MAYOR O IGUAL A 0 y MAYOR/MENOR A EL VALOR ACTUAL
            $array[$j+1] = $array[$j]; //Mueve el dato en posicion j a la posicion siguiente
            $j--; //Retrocedemos j
        }     
        $array[$j+1] = $key; //Guardar el dato KEY
    }
    return $array;
}

print_r(insertionSort([4,3,2,1,-1,-3]));

//MergeSort 

function mergeSort($array){

    if(count($array) <= 1) return $array;


    $mid = floor(count($array)/2);

    $left = array_slice($array,0,$mid);
    $right = array_slice($array,$mid);

    $left = mergeSort($left);
    $right = mergeSort($right);

    //print_r($left);
    //print_r($right);
    return merge($left,$right);
}

function merge($left,$right){
    $result = [];

    while(count($left) > 0 && count($right) > 0){
        if($left[0] <= $right[0]){
            array_push($result,array_shift($left));
        }else{
            array_push($result,array_shift($right));
        }
    }

    while(count($left) >0 ){
        array_push($result,array_shift($left));
    }

    while(count($right)>0){
        array_push($result,array_shift($right));
    }
    
    return $result;
}

print_r(mergeSort([1,3,5,2,8,7,6]));






?> 
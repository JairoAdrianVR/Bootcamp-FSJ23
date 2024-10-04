<?php 

    //Arrays

    //Declaracion de array
    $arraycito = [];

    //Metodos de Array

    //Ingresar un dato al final del array
    array_push($arraycito,3);
    array_push($arraycito,5);

    print_r($arraycito);

    //Eliminar el ultimo dato de un array
    array_pop($arraycito);
    print_r($arraycito);

    //Ingresar un dato al inicio de un array
    array_unshift($arraycito,4);
    print_r($arraycito);
    
    //Eliminar el primer dato de un array
    array_shift($arraycito);
    print_r($arraycito);

    //Array_unique obtener 2 arrays, genera un array unico sin datos repetidos
    
    //Array_merge obtener 2 arrays, genera un array con  datos repetidos

    //Array_reduce reduce todo el array a un solo dato sumando todos los valores

    //Array_search Busca un dato en especifico en el array

    //Array_slice Corta un array tomando como refencia una posicion

    //Array_reverse Da vuelta los valores de un array

    //Array_map Recorre el array y ejecuta una funcion por cada posicion

?>
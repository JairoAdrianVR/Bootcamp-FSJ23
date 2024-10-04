<?php
//Comentario de una linea
/* 
    Comentario
    Multilinea
*/

//Variables
//Declaracion de variable
    $nombreVariable;

    $nombreVariable = "Hola desde php";

    $numero = 34;

    $numeroDecimal = 35.1;

    $booleanos = true;

// Imprimir datos
echo $nombreVariable;

//Salto de linea
echo "\n";

print($numero);

//Operadores 
$suma = 3+"3";
print($suma);

//Operador de concatenacion
$concatString = "Jairo "."Vega";
print($concatString);


//Template String
$nombre = "Jairo";
echo "Hola, tu nombre es {$nombre}";


//Funciones
//Declaracion de funcion
function nombreFuncion(){
    echo "Soy la funcion y me estoy ejecutando";
}
//Llamada a la funcion
nombreFuncion();

//Declaracion de funcion con Parametros

function funcionConParam($nombreParam){
    print($nombreParam);
}

funcionConParam("Jairo");

//Funcion con Return tipo string
function funcionConReturn(){
    echo "Si me estoy ejecutando \n";
    return "Holis";
}
echo funcionConReturn();

//Funciones Anonimas
//Funcion expresada
$funcionAnon = function(){
    echo "Soy una funcion anonima";
};

$funcionAnon();

//Funcion Flecha
$funcionFlecha = fn($a,$b) => ($a 
+ $b) ;
echo $funcionFlecha(3,3);


?>

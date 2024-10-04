<?php 

//Estructuras de control -> Condicionales
// IF
if(1 > 2){
    echo "Es mayor";
} else {
    echo "No es mayor";
}

$opcion = 1;
//Switch
switch ($opcion){
    case 1 : 
        echo "Se le comunicara con Administracion";
        break;
    case 2 :
        echo "Se le comunicara con Gerencia";
        break;
    default: 
        echo "Aguarde y en algun momento si podemos le contentamos jaja saludos";
}

//Operador Ternario

$respuesta = ( 1 > 2 ) ?  "Si es mayor" :  "No es mayor";
print $respuesta;
?>
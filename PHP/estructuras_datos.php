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
    //Array_unique al obtener 2 arrays, genera un array unico sin datos repetidos
    $array1 = [1, 2, 3, 4, 5];
    $array2 = [5, 6, 7, 8, 9];
    function arrayUnique($array1, $array2) {
        $arrayResult = [];
        
        //foreach para recorrer el array en cada posicion representada con $value
        foreach ($array1 as $value) { 
            //con in_array preguntamos si un valor existe en un array, si agregamo ! preguntamos si no está 
            if (!in_array($value, $arrayResult)) {
                //si no está, guardamos el valor único en el nuevo array
                $arrayResult[] = $value;
            }
        }
       // lo mismo con el segundo array
        foreach ($array2 as $value) {
            if (!in_array($value, $arrayResult)) {
                $arrayResult[] = $value;
            }
        }
       
        //regresa el nuevo array 
        return $arrayResult;
    }
    $result = arrayUnique($array1, $array2);
    print_r($result);
    //Array_merge obtener 2 arrays, genera un array con  datos repetidos
    


    //Array_reduce reduce todo el array a un solo dato sumando todos los valores

    //Array_search Busca un dato en especifico en el array
    function array_search_manual($needle, $haystack) {
        for ($i = 0; $i < count($haystack); $i++) {
            if ($haystack[$i] === $needle) {
                return $i;
            }
        }
        return false;
    }
    
    // Ejemplo de uso
    $frutas = ['manzana', 'banana', 'naranja', 'uva', 'pera'];
    $buscar = 'naranja';
    $resultado = array_search_manual($buscar, $frutas);
    
    if ($resultado !== false) {
        echo "'{$buscar}' se encontró en el índice: {$resultado}";
    } else {
        echo "'{$buscar}' no se encontró en el array";
    }
    //Array_slice Corta un array tomando como refencia una posicion
//ARRAY SLICE
function arraySliceManual($array, $offset, $length = null) {
    $result = [];
    $arraySize = count($array);
    
    if ($offset < 0) {
        $offset = $arraySize + $offset;
    }
    
    //validando si no se recibe parametro length
    if ($length === null) {
        //si no se recibe parametro le resta la posición que el usuario quiere
        $length = $arraySize - $offset;
    }
    //validamos que el length no sea negativo 
    if ($length < 0) {
        $length = ($arraySize + $length) - $offset;
    }
    
    for ($i = $offset; $i < $offset + $length && $i < $arraySize; $i++) {
        $result[] = $array[$i];
    }
    return $result;
}
$array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
$offset = 3;
$length = 4;
$slicedArray = arraySliceManual($array, $offset, $length);
print_r($slicedArray);


    //Array_reverse Da vuelta los valores de un array
    function arrayReverse($arr){
        $reversed = [];
        for ($i = count($arr) - 1; $i >= 0; $i--) {
            $reversed[] = $arr[$i];
        }
        return $reversed;
    }
    
    //Array_map Recorre el array y ejecuta una funcion por cada posicion
    function arrayMapManual($callback, $array) {
        $mappedArray = [];
        foreach ($array as $index => $value) {
            $mappedArray[$index] = $callback($value);
        }
        return $mappedArray;
    }
    function square($n) {
        return $n * $n;
    }

    $array = [1, 2, 3, 4, 5];
    $mappedArray = arrayMapManual('square', $array);
    print_r($mappedArray);




    // Array Asociativo
    $arrayAsociativo = [
        "nombre" => "Jairo",
        "edad" => 75
    ];
    // $arrayAsociativo[] = 3;
    //$arrayAsociativo[] = 5;
    $arrayAsociativo["hobbie"] = "Dormir";
    //$arrayAsociativo[] = "Nose";
   // print_r($arrayAsociativo);

   
   function arrayPushAsociativo($array,$clave,$valor){
       $array[$clave] = $valor;
       return $array; //Sacamos el array con el nuevo dato pusheado 
    }
    
    $arrayAsociativo = arrayPushAsociativo($arrayAsociativo,"sueños","Dormir mas, mucho");
    $arrayAsociativo = arrayPushAsociativo($arrayAsociativo,"trabajo","Poco");
    
    foreach($arrayAsociativo as $clave => $valor){
        echo "La clave es {$clave} y su valor es {$valor} \n";
    }


    // Array Mutidimensionales
    
    $matriz =[
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ];

    print_r($matriz);

    //Acceder a los datos de una matriz
    print($matriz[0][1]);


    // Listas Enlazadas

    class Nodo {
        public $valor;
        public $siguiente;

        public function __construct($dato) {
            $this->valor = $dato;
            $this->siguiente = null;
        }
    }

    class ListaEnlazada {
        public $cabeza;

        function __construct()
        {
            $this->cabeza = null;
        }

        function agregarNodo($dato){
            $nuevoNodo = new Nodo($dato);

            if($this->cabeza === null){
                $this->cabeza = $nuevoNodo;
                return $nuevoNodo;
            }else{
                $nodoActual = $this->cabeza;

                while($nodoActual->siguiente !== null){
                    $nodoActual = $nodoActual->siguiente;
                }
                $nodoActual->siguiente = $nuevoNodo;
                return $nuevoNodo;
            }
        }
    }

    $listita = new ListaEnlazada();
    $listita->agregarNodo(3);
    $listita->agregarNodo(5);
    $listita->agregarNodo(10);
    $listita->agregarNodo(15);
    print_r($listita);
?>
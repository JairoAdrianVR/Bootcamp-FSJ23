<?php 
    /*Que era POO/OOP?
    Forma de programar 
        PENSANDO EN ->  Representar objetos de la vida real
        MOLDES -> Clases van a ser nuestros moldes de objetos
        DE OBJETOS -> Se crean/instancian a traves de una CLASE
    
    4 PILARES DE POO
    - Encapsulamiento -> Modificadores de acceso -> limitar el acceso a ciertos atributos/metodos
    - Abstraccion -> GETTERS/SETTERS -> Dar la capacidad de interactuar con atributos/metodos limitados 
    - Herencia -> Clase Hija(subclase) va a obtener los metodos/propiedades de la Clase Padre (superclase)
    - Polimorfismo -> Utilizando el mismo metodo cambiamos su comportamiento en las subclases
    */

    
     
    class Vehiculo { 
        //Que es un VEHICULO? -> Generar sus CARACTERISTICAS -> Propiedades/Atributos
       private $marca;
       private $modelo; 
       private $anio;
       protected $color;

       //Constructor metodo reservado asignar valores a las propiedades al momento de crear un objeto
        function __construct($marcaParam,$modeloParam,$anioParam,$colorParam)
        {
            $this->marca = $marcaParam;
            $this->modelo = $modeloParam;
            $this->anio = $anioParam;
            $this->color = $colorParam;
        }

        function getMarca(){
            return $this->marca;
        }

        //Cambiar el valor de un atributo/propiedad
        function setMarca($marcaParam){
            $this->marca = $marcaParam;
        }

    }

    //Instancia de CLASE -> creamos un OBJETO
    $auto = new Vehiculo("Chevrolet","Suburban",2022,"Negro");

    //Cambiar o setear valores en sus atributos/propiedades
    $auto->setMarca("Ford");

    print_r($auto);

    class Motocicleta extends Vehiculo{
        private $capacidadTanque;

        function __construct($marcaParam,$modeloParam,$anioParam,$colorParam,$capacidadParam)
        {
            //Heredando el constructor de la clase
            parent::__construct($marcaParam,$modeloParam,$anioParam,$colorParam);
            $this->capacidadTanque = $capacidadParam;
        }

        //Palabra reservada para traer cosas del padre atributos/metodos
        function getMarca(){
            return "La marca de la moto es ".parent::getMarca();
        }

    }

    $moto = new Motocicleta("Suzuki","GSXR",2022,"Azul",20);
    print_r($moto);
   print( $moto->getMarca()."\n");
   print( $auto->getMarca());

  
?>
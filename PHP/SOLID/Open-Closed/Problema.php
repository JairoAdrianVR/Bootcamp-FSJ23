<?php 
    /*
        Principio de abierto/cerrado 
        Clase abierta para extension y cerrada a modificacion
    */

    class PilotoRally{
        function acelerarAuto(Citroen $auto){
            $auto->aumentarVelocidad();
        }
    }

    class Citroen{
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 10;
        }
    }

    class Ford{
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 15;
        }
    }

    $piloto1 = new PilotoRally();
    $piloto2 = new PilotoRally();
    
    $auto1 = new Citroen();
    $auto2 = new Ford();

    $piloto1->acelerarAuto($auto1);
    $piloto2->acelerarAuto($auto2);

?>
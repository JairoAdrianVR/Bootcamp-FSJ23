<?php 
    interface IAuto{
        function aumentarVelocidad();
    }
     
     class PilotoRally{
        function acelerarAuto(IAuto $auto){
            $auto->aumentarVelocidad();
        }
    }

    class Citroen implements IAuto{
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 10;
        }
    }

    class Ford implements IAuto{
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
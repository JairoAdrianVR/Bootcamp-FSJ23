<?php 
    abstract class Persona{
        function comer(){}

        function dormir(){}

        function correr(){}

        //Cuando sos mayor a 18
        abstract function getDui();

        function trabajar(){}
    }

    class Adulto extends Persona{
        function getDui()
        {
            
        }
    }

    class Bebe extends Persona{
        public $tutor;

        function __construct(Adulto $tutorParam)
        {
            $this->tutor = $tutorParam;
        }

        function getDui()
        {
            return $this->tutor->getDui();
        }
    }

?>
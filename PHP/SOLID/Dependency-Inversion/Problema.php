<?php
    //Los modulos de alto nivel NO deben depender de los modulos de bajo nivel
    //Ambos deberian depender de abstracciones

    class ConexionBD{
        protected $adaptador;
        protected $adaptador2;

        function __construct()
        {
            $this->adaptador = new MySQL;
            $this->adaptador2 = new MongoDB;
        }

        function conectar(){

        }

    }

    class MySQL{

    }

    class MongoDB{

    }

?>
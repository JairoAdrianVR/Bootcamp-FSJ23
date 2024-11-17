<?php 

interface IAdaptador{
    function conexion();
}

    class ConexionBD{
        protected $adaptador;

        function __construct(IAdaptador $adaptadorParam)
        {
            $this->adaptador = $adaptadorParam;
        }

        function conectarBD(){
            $this->adaptador->conexion();
        }

    }

    class MySQL implements IAdaptador{
        function conexion()
        {
            //Forma de conectar a MYSQL
        }
    }

    class MongoDB implements IAdaptador{
        function conexion()
        {
            //Forma de conectar a MongoDB
        }
    }

    class Cassandra implements IAdaptador{
        function conexion()
        {
            //Forma de conectar a Cassandra
        }
    }


    ?>
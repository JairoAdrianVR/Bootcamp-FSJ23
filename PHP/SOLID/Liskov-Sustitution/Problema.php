<?php 
    // Liskov Sustitution -> Principio de sustitucion de Liskov
    // Una clase padre puede ser reemplazada por una clase hija sin bloqueos o errores en su implementacion

    class Persona{
        function comer(){}

        function dormir(){}

        function correr(){}

        //Cuando sos mayor a 18
        function getDui(){}

        function trabajar(){}
    }

    class Bebe extends Persona{
        function getDui()
        {
            return new Exception("No tengo DUI aun");
        }
    }



    //OTRO EJEMPLO

    class Torogoz{
        function volar(){}

    }

    class TorogozJuguete extends Torogoz{
        function volar(){
            return new Exception("Soy de juguete, no puedo volar");
        }
    }

?>
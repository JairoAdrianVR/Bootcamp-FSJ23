<?php 
    // Interface Segregation -> Segregacion de interfaces
    // Si detectamos una interface demasiado grande (o con sobrecarga), dividimos esa interface en otras mas especificas

    interface Ave{ 
        function comer();
        function dormir();
        function volar();
        function caminar();
    }

    class Torogoz implements Ave{
        function comer(){}
        function dormir(){}
        function volar(){}
        function caminar(){}
    }

    class Dodo implements Ave{
        function comer(){}
        function dormir(){}
        function volar(){
            return new Exception("No puedo volar");
        }
        function caminar(){}
    }

    class Pinguino implements Ave{
        function comer(){}
        function dormir(){}
        function volar(){
            return new Exception("No puedo volar");
        }
        function caminar(){}
        
        function nadar(){}
    }


    
?>
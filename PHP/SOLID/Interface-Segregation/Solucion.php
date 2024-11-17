<?php 
     interface Ave{ 
        function comer();
        function dormir();
        function caminar();
    }

    interface AveVoladora{
        function volar();
    }

    interface AveNadadora{
        function nadar();
    }

    class Torogoz implements Ave,AveVoladora{
        function comer(){}
        function dormir(){}
        function volar(){}
        function caminar(){}
    }

    class Dodo implements Ave{
        function comer(){}
        function dormir(){}
        function caminar(){}
    }

    class Pinguino implements Ave,AveNadadora{
        function comer(){}
        function dormir(){}
        function caminar(){}
        
        function nadar(){}
    }

?>
<?php 
    /*
        Single Responsability -> Una Responsabilidad
        No sobrecargar de funcionalidades una clase
        TODOS LOS METODOS Y ATRIBUTOS TIENEN QUE ESTAR DIRECTAMENTE RELACIONADOS
        CON LA CLASE EN LA QUE EXISTEN
    */


class MenuTienda{

    function mostrarLista(){}
    function agregarOpcionMenu(){}    
    function agregarProductoCarrito(){}
    function eliminarOpcionMenu(){}  
    function pagarCarrito(){}
    
    function logIn(){} // NO
    function logOut(){} // NO

}

?>
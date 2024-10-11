<?php 

class Aerolinea {
    //Caracteristicas 
    public $id;
    public $nombre;
    public $tipo_aerolinea;
    public $numero_aviones;
    public $servicio;

    function __construct($codigo,$nombreParam,$tipo_aerolineaParam, $numero_avionesParam)
    {
        $this->id = $codigo;
        $this->nombre = $nombreParam;
        $this->tipo_aerolinea = $tipo_aerolineaParam;
        $this->numero_aviones = $numero_avionesParam;
    }

}

$aerolinea1 = new Aerolinea(1,"Delta","Comercial",80);
print_r($aerolinea1);

?>
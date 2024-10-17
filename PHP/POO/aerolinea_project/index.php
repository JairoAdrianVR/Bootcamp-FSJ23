<?php 
        //echo "Hola desde php <br /> ";
        //Importar un archivo local
        /*
            include() -> Traen codigo de otro archivo SI FALLA ALGO VA A DAR UNA ADVERTENCIA
            require() -> Traen codigo de otro archivo SI FALLA ALGO VA A FRENAR LA EJECUCION
        */
        session_start();

        require('./aerolinea.php');
        
        if(!isset($_SESSION['aerolineas'])){
            $_SESSION['aerolineas'] = [
                
            ];
        }
       
        //print_r($_SESSION['aerolineas']);
        $aerolineas = $_SESSION['aerolineas'];

        
        if(isset( $_POST['id'],$_POST['nombre'],$_POST['cantAviones'],$_POST['tipo'])){
        //print_r($_POST);
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $cantAviones = $_POST['cantAviones'];
        $tipo = $_POST['tipo'];

        $aerolinea = new Aerolinea($id,$nombre,$tipo,$cantAviones);
        array_push($aerolineas,$aerolinea);
        print_r($aerolineas);
        $_SESSION['aerolineas'] = $aerolineas;
        }
        
        /* if(count($aerolineas)> 0){
            print_r($aerolineas);
        }; */


    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica Aerolineas</title>
</head>
<body style="background-color: grey;">
    <h1>Holiwis</h1>

    <form method="POST" action="">
        <label>Nombre Aerolinea</label>
        <input type="text" name="nombre">

        <label>Identificador</label>
        <input type="text" name="id">

        <label>Cantidad de Aviones</label>
        <input type="text" name="cantAviones">

        <label>Tipo de Aerolinea</label>
        <select name="tipo">
            <option value="Comercial">Comercial</option>
            <option value="Privado">Privado</option>
            <option value="Carga">Carga</option>
        </select>

        <button type="submit" >Registrar aerolinea</button>
    </form>

    <main>
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cant Aviones</th>
                <th>Tipo Aerolinea</th>
            </tr>

        <?php foreach($aerolineas as $aerolinea){
           echo "<tr>
                <td>{$aerolinea->id}</td>
                <td>{$aerolinea->nombre}</td>
                <td>{$aerolinea->numero_aviones}</td>
                <td>{$aerolinea->tipo_aerolinea}</td>
            </tr>";
        } ?>
        </table>
    </main>
   
</body>
</html>
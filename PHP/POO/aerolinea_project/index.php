<?php 
        //echo "Hola desde php <br /> ";
        //Importar un archivo local
        /*
            include() -> Traen codigo de otro archivo SI FALLA ALGO VA A DAR UNA ADVERTENCIA
            require() -> Traen codigo de otro archivo SI FALLA ALGO VA A FRENAR LA EJECUCION
            */
        require('./aerolinea.php');
        
        session_start();
        
        if(!isset($_SESSION['aerolineas'])){
            $_SESSION['aerolineas'] = [
                
            ];
        }
       
        /* GUARDAMOS la session en la variable aerolineas
            para poder manipular este array */
        //print_r($_SESSION['aerolineas']);
        $aerolineas = $_SESSION['aerolineas'];

        
        /* CREAMOS una nueva Aerolinea */
        if(isset( $_POST['id'],$_POST['nombre'],$_POST['cantAviones'],$_POST['tipo'])){
        //print_r($_POST);
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $cantAviones = $_POST['cantAviones'];
        $tipo = $_POST['tipo'];

        $aerolinea = new Aerolinea($id,$nombre,$tipo,$cantAviones);
        array_push($aerolineas,$aerolinea);
        print_r($aerolineas);

        //Guardamos el array actual en la SESSION
        $_SESSION['aerolineas'] = $aerolineas;

        header('Location: /FSJ23/aerolinea_project/index.php');
        exit;
        }
        
        /* if(count($aerolineas)> 0){
            print_r($aerolineas);
        }; */

        /* BUSCAMOS una Aerolinea especifica en nuestro array */
        function getAerolineaPorID($id,$aerolineas){
            foreach($aerolineas as $aerolinea){
                if($aerolinea->id == $id){
                    return $aerolinea;
                }
            }
        }

        
        /* ELIMINAR una  Aerolinea */
        if(isset($_GET['delete'])){
            $id = $_GET['delete'];
            print($id);

            foreach($aerolineas as $key => $aerolinea){
                if($aerolinea->id == $id){
                    print_r($aerolinea);
                    //print($key);
                    unset($aerolineas[$key]);

                    //Guardamos el array actual en la SESSION
                    $_SESSION['aerolineas'] = $aerolineas;

                    header('Location: /FSJ23/aerolinea_project/index.php');
                    break;
                }
            }

        }

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

    <?php 
        if(isset($_GET['edit'])){ 
            $aerolineaParaEditar = getAerolineaPorID($_GET['edit'],$aerolineas);
            print_r($aerolineaParaEditar);
    ?> 
        <h2>Editar Aerolinea</h2>
        
        <form method="POST" action="">
        <label>Identificador</label>
        <input type="text" name="id" value="<?php echo $aerolineaParaEditar->id ?>">
        
        <label>Nombre Aerolinea</label>
        <input type="text" name="nombre" value="<?php echo $aerolineaParaEditar->nombre ?>">>


        <label>Cantidad de Aviones</label>
        <input type="text" name="cantAviones" value="<?php echo $aerolineaParaEditar->numero_aviones ?>">>

        <label>Tipo de Aerolinea</label>
        <input type="text" name="tipo" value="<?php echo $aerolineaParaEditar->tipo_aerolinea ?>">>

        <button type="submit" >Actualizar aerolinea</button>
    </form>

    <?php }else { ?>

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
        <?php }?>
    <main>
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cant Aviones</th>
                <th>Tipo Aerolinea</th>
                <th>Acciones</th>
            </tr>

        <?php foreach($aerolineas as $aerolinea){
           echo "<tr>
                <td>{$aerolinea->id}</td>
                <td>{$aerolinea->nombre}</td>
                <td>{$aerolinea->numero_aviones}</td>
                <td>{$aerolinea->tipo_aerolinea}</td>
                <td>
                <a href='?edit={$aerolinea->id}' >Editar</a>
                <a href='?delete={$aerolinea->id}'>Eliminar</a>
                </td>
            </tr>";
        } ?>
        </table>
    </main>
   


</body>
</html>
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

        <button type="submit">Registrar aerolinea</button>
    </form>


    <?php 
        //echo "Hola desde php <br /> ";

       if(isset( $_POST['id'],$_POST['nombre'],$_POST['cantAviones'],$_POST['tipo'])){
        print_r($_POST);
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $cantAviones = $_POST['cantAviones'];
        $tipo = $_POST['tipo'];
        }


    ?>
</body>
</html>
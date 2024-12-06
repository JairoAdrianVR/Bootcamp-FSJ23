<?php 
    require_once './controller/ProductController.php';
    $controller = new ProductController();

    $controller->read();

    //include './views/home.php';
    echo "Hola";
?>

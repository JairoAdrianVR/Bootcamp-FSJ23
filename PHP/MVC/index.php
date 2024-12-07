<?php 
    require_once './controller/ProductController.php';
    $controller = new ProductController();

    $action = isset($_GET['action']) ? $_GET['action'] : 'read';


    switch($action){
        case 'read':
            $controller->read();
            break;
        case 'create':
            //$metodoPost = $_POST;
            $controller->create();
            break;
    }
     
    

    //include './views/home.php';
    //echo "Hola";
    print($action);
    //print($metodoPost);
?>

<?php 
    require_once './config/database.php';
    require_once './models/Product.php';

    class ProductController{
        public $product;
        public $db;

        public function __construct()
        {
            $database = new Database();
            $this->db = $database;
            $this->product= new Product($this->db);
        }

        public function read(){
            include './views/home.php';
        }

        public function create(){
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $this->product->name = $_POST['nombre'];
                $this->product->price = $_POST['precio'];
                $this->product->discount = $_POST['descuento'];
                $this->product->quantity = $_POST['cantidad'];

                $this->product->create();
            /*   if($this->product->create()){
                    //header('Location: ./views/home.php');
               }else{
                    echo "Error al crear el producto";
               }; */

            }else{
                
                include './views/create.php';
        }}

    }

?>
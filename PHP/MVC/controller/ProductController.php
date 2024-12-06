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

    }

?>
<?php 
    require_once './config/database.php';
    require_once './models/Product.php';

    class ProductController{
        public $product;
        public $db;

        public function __construct()
        {
            $database = new Database();
            $this->db = $database->getConnection();
            $this->product= new Product($this->db);
        }

        public function read(){
           $sentence = $this->product->read();
           $products = $sentence->fetchAll(PDO::FETCH_ASSOC);
            include './views/home.php';
        }

        public function create(){
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $this->product->name = $_POST['nombre'];
                $this->product->price = $_POST['precio'];
                $this->product->discount = $_POST['descuento'];
                $this->product->quantity = $_POST['cantidad'];

                $this->product->create();
               /*if($this->product->create()){
                    header('Location: ./index.php');
               }else{
                    echo "Error al crear el producto";
               }; */

            }else{
                
                include './views/create.php';
        }}

        public function update($id){
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $this->product->name = $_POST['nombre'];
                $this->product->price = $_POST['precio'];
                $this->product->discount = $_POST['descuento'];
                $this->product->quantity = $_POST['cantidad'];
                $this->product->id = $id;
                
                $this->product->update();
                /*if($this->product->update()){
                    header('Location: ./views/home.php');
                }else{
                    echo "Error al editar el producto";
                }*/

            }else{
                $sentence = $this->product->findOne($id);
                $product = $sentence->fetch(PDO::FETCH_ASSOC);
                include './views/edit.php';
        }

        }

        public function delete($id){
            $this->product->delete($id);
            header('Location: /');
        }

    }

?>
<?php 

    class Product{ 
        public $id;
        public $name;
        public $price;
        public $discount;
        public $quantity;
        public $connection;
        public $table_name = "productos";

        public function __construct($db)
        {
            $this->connection = $db;
        }

        public function read(){
            $query = "SELECT * FROM {$this->table_name}";
            $sentence = $this->connection->prepare($query);
            $sentence->execute();
            return $sentence;
        }

        public function create(){
           //Forma 1
           /* $query = "INSERT INTO {$this->table_name} SET nombre={$this->name}, precio={$this->price}, descuento={$this->discount}, cantidad={$this->quantity}";
            $sentence = $this->connection->prepare($query);
            $sentence->execute();
            return $sentence;*/
            //Forma 2
            
            $query2 = "INSERT INTO {$this->table_name} (nombre,precio,descuento,cantidad) VALUES (?,?,?,?)";
            $sentence = $this->connection->prepare($query2);
            $sentence->execute([$this->name,$this->price,$this->discount,$this->quantity]);
            return $sentence;
        }

        public function update(){
            $query = "UPDATE {$this->table_name} SET nombre=?, precio=?, descuento=?, cantidad=? WHERE id = {$this->id}";
            $sentence = $this->connection->prepare($query);
            $sentence->execute([$this->name,$this->price,$this->discount,$this->quantity]);
            return $sentence;
            /* if($sentence->execute()){
                return true;
            }
            return false;*/
        }

        public function findOne($id){
            $query = "SELECT * FROM {$this->table_name} WHERE id = {$id}";
            $sentence = $this->connection->prepare($query);
            $sentence->execute();
            return $sentence;
        }


        public function delete($id){
            $query = "DELETE FROM {$this->table_name} WHERE id = {$id}";
            $sentence = $this->connection->prepare($query);
            return $sentence->execute();

        }
    }

?>
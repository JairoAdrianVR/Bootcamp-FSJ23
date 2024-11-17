<?php 

    interface IMetodoPago{
        function pagar();
    }

    class PasarelaPago{
        /*
        protected $metodoPago;

        function __construct(IMetodoPago $metodoPagoParam)
        {  
            $this->metodoPago = $metodoPagoParam;
        }*/

        function pagarOrden(IMetodoPago $metodoPago){
            //Forma de pagar en Paypal
            //Forma de pagar en Stripe
            //$this->metodoPago->pagar();
            $metodoPago->pagar();
        }
    }

    class Stripe implements IMetodoPago{
        function pagar(){}
    }

    class Paypal implements IMetodoPago{
        function pagar(){}
    }
?>
import { useState } from 'react';
import './App.css'
import {Saludin} from './components/SaludinComponent'

function App() {

  //Hook -> Metodo declarativo que nos da una funcion en especifico
  // let nombre = "Jairo";
  
  //Estado -> Una cajita en cual podemos guardar un dato mutable y vive hasta la face de desmontaje
  //Se representa con el Hook useState()
  // nombreEstado -> NOMBRE DE NUESTRA VARIABLE
  // cambiarValorEstado -> funcion para cambiar el valor del estado
  // useState(VALOR INICIAL) 
  const [nombreEstado, cambiarValorEstado] = useState("Emma"); 

  return (
   //Fragment -> <> </> DELIMITADORES CONTENEDORES
  //Mostrar un componente en la vista, lo cargamos en el App.jsx
  //Para ingresar(inyectar) codigo JS en el HTML vamos a utilizar las { }
    <>
        <h1>Hola llegamos a React, mi nombre es {nombreEstado} </h1>
        <button  onClick={() => cambiarValorEstado("Jorge")}>MAGIA</button>
        <Saludin nombreUsuario={nombreEstado} />
    </>
  )
}

export default App


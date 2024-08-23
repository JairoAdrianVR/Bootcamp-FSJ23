//Creamos un nuevo componente JSX
// eslint-disable-next-line react/prop-types
export function Saludin ({nombreUsuario}){
    //Props -> Propiedades se reciben desde otro componente y son dinamicas

    return (
    <>
      <h1>Hola {nombreUsuario}, te saludo desde el saludin</h1>
    </>
    
  )
}


  
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserDataContext"
import { auth } from "../../firebase/config"
import { signOut } from "firebase/auth"

export const Home = () => {
  const {data,setData} = useContext(UserContext);

  const logout = () => {
    //Deslogeamos el usuario de Firebase
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("La sesion se ha cerrado con exito. Vuelva pronto")
    }).catch((error) => {
      // An error happened.
    });

    //Limpiamos los datos del usuario de nuestro CONTEXTO
    setData(null)
  }

  const getDataLocal = (nombreLocal) => {
   return JSON.parse(localStorage.getItem(nombreLocal));
  }

  useEffect(() => {
    console.log(getDataLocal('user'));
    
  })

  return (
    <div>
      { data ? 
        <> 
         <h1>Hola, tu correo es: {data.email}</h1>
         <button onClick={logout}>Logout</button> 
        </> :
        <Link  to="/session">Iniciar Sesion</Link>
      }
    </div>
  )
}

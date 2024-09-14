import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserDataContext"

export const Home = () => {
  const info = useContext(UserContext);

  return (
    <div>
        <Link  to="/session">Iniciar Sesion</Link>
        <h1>{info}</h1>
    </div>
  )
}

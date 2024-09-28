import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserDataContext"
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps{
    children: JSX.Element
}

export const ProtectedRoute:React.FC<IProtectedRouteProps> = ({children}) => {
    const {currentUser } = useContext(UserContext);

  return currentUser ? children :  <Navigate to='/session' />
}

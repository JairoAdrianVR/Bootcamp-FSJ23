//Contexto nos sirve para compartir informacion entre componentes

import { createContext } from "react";

export const UserContext = createContext("Informacion");

export const MyProvider = ({children}) => {


    return(
            <UserContext.Provider value="Dato" >
                {children}
            </UserContext.Provider>
    )

}
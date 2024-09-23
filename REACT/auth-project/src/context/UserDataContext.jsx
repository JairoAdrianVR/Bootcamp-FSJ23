//Contexto nos sirve para compartir informacion entre componentes

import { createContext, useState } from "react";

//Crear EL CONTEXTO -> Que seria un ambiente para entender y compartir informacion
export const UserContext = createContext("Informacion");

export const MyProvider = ({children}) => {
    const [data,setData] = useState(null);

    const userObject = {
        data,
        setData
    }

    return(
            <UserContext.Provider value={userObject} >
                {children}
            </UserContext.Provider>
    )

}
;

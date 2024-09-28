import { User } from "firebase/auth";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IUserContextProps{
    currentUser: User | null,
    setCurrentUser : Dispatch<SetStateAction <User | null>>
}

export const UserContext = createContext<IUserContextProps | null>(null);

export const UserProvider:React.FC<{children: ReactNode} > = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

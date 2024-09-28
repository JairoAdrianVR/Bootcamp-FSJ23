import { User } from "firebase/auth";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IUserContextProps{
    currentUser: User | null,
    setCurrentUser : Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<IUserContextProps | null >(null);

const UserProvider = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{currentUser,setCurrentUser}}>

        </UserContext.Provider>
    )
}
import { useEffect } from "react"

export const Countries = () => {
    //useEffect -> Ejecutar algo al momento de montar un componente
    //-> Sincronizar datos, ejecutar algo en fase de ACTUALIZACION

    const getCountries = async () => {
        let response = await fetch('https://restcountries.com/v3.1/all')
        console.log(response);
    }   


    useEffect( () => { 
        console.log("Holis");
        getCountries();

    },[]
)

    return(
        <>
            Countries
        </>
    )
}

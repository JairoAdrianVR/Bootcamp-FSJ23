// Custom Hook -> Es una funcion la cual es CREADA POR UN DESARROLLADOR de este proyecto
// El objetivo es realizar una tarea especifica
// Puede tener sintaxis JS, o aprovechar las bondades de la sintaxis JSX (useEffect, useState)
import { useEffect, useState } from "react"

export const useCountriesData = () => { 

    //useEffect -> Ejecutar algo al momento de montar un componente
    //-> Sincronizar datos, ejecutar algo en fase de ACTUALIZACION
    const [countries, setCountries] = useState([]); 
    
    const getCountries = async () => {
        //https://pokeapi.co/api/v2/pokemon/ditto
        let response = await fetch('https://restcountries.com/v3.1/all')
        let data = await response.json();
        //console.log(response);
        console.log(data);

        
        //    RETRASAR EL GUARDADO DE DATOS EN EL ESTADO
        /* setTimeout(() => {
            setCountries(data);
        }, 3000); */
        
        setCountries(data);
    }   
    

    useEffect( () => { 
        //console.log("Holis");
        getCountries();
        //console.log(countries);
    },[] //Array de Dependencia. Te vas ejecutar cuando esto cambie. SI ESTA VACIO NO SE VA EJECUTAR
    )

    return countries;

}


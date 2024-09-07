// Custom Hook -> Es una funcion la cual es CREADA POR UN DESARROLLADOR de este proyecto
// El objetivo es realizar una tarea especifica
// Puede tener sintaxis JS, o aprovechar las bondades de la sintaxis JSX (useEffect, useState)
import { useEffect, useState } from "react"

export const useCountriesData = (region,name) => { 

    //useEffect -> Ejecutar algo al momento de montar un componente
    //-> Sincronizar datos, ejecutar algo en fase de ACTUALIZACION
    const [countries, setCountries] = useState([]); 
    
    const getCountries = async () => {
        //https://pokeapi.co/api/v2/pokemon/ditto
        let response = await fetch('https://restcountries.com/v3.1/all')
        let data = await response.json();
        //console.log(response);
        console.log(data);
        let filteredCountries = data;

        if(region){
            filteredCountries = filteredCountries.filter((country) => country.region === region )
        }


        if(name){
            filteredCountries = filteredCountries.filter((country) => country.name.common  === name )
        }        
        
        
        //    RETRASAR EL GUARDADO DE DATOS EN EL ESTADO
        /* setTimeout(() => {
            setCountries(data);
        }, 3000); */
        
        setCountries(filteredCountries);
    }   
    

    useEffect( () => { 
        //console.log("Holis");
        getCountries();
        //console.log(countries);
    },[region, name] //Array de Dependencia. Te vas ejecutar cuando esto cambie. SI ESTA VACIO NO SE VA EJECUTAR
    )

    return countries;

}


import { useEffect, useState } from "react";
import { ICountry } from "../models/ICountry";
// eslint-disable-next-line react-refresh/only-export-components
const APIuri = "https://restcountries.com/v3.1/all"

export const useCountriesData = (region:string,name:string) => {
    const [countries,setCountries] = useState<ICountry[]>([])

    const getCountries = async ( ) => {
        const response:Response = await fetch(APIuri);
        const data: ICountry[] = await response.json();
        console.log(data);
        
        let filteredCountries = data;

        if(region){
            filteredCountries = filteredCountries.filter((country) => country.region === region )
        }


        if(name){
            filteredCountries = filteredCountries.filter((country) => country.name.common  === name )
        }      

        setCountries(filteredCountries)
    }

    useEffect(() => {
        getCountries();
    },[region,name])

  return countries
}



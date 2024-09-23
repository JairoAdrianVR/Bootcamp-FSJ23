import { useEffect, useState } from "react";
import { ICountry } from "../models/ICountry";
// eslint-disable-next-line react-refresh/only-export-components
const APIuri = "https://restcountries.com/v3.1/all"

export const useCountriesData = () => {
    const [countries,setCountries] = useState<ICountry[]>([])

    const getCountries = async ( ) => {
        const response:Response = await fetch(APIuri);
        const data: ICountry[] = await response.json();
        console.log(data);
        
        setCountries(data)
    }

    useEffect(() => {
        getCountries();
    },[])

  return countries
}



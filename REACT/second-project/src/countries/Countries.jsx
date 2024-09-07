import { useState } from "react";
import { useCountriesData } from "../hooks/useCountriesData"
import { ListCountries } from "./components/ListCountries";
import { LoadingComponent } from "../components/LoadingComponent";

export const Countries = () => {
    //Recibiendo la informacion del hook useCountriesData
    const [region,setRegion] = useState('');
    const [name, setName] = useState('');

    let countries = useCountriesData(region,name);
    
    return(
        <>
            <h1>List of Countries</h1>

            <label className="form-label">
              Filter by region:
              <select className="form-select m-2" onChange={(e) => setRegion(e.target.value)}>
                <option value="" >All</option>
                <option value="Africa" >Africa</option>
                <option value="Asia">Asia</option>
                <option value="Americas">America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </label> 

            <label className="form-label m-2">
              Find your country: 

              <input type="text" placeholder="Search your country" className="form-control m-2" 
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            {/* Aca agrego mi codigo JS*/}
            {/* Renderizado condicional -> OPCION DE MOSTRAR UN DATO O OTROS*/}
            {  countries.length > 0 ?  <ListCountries countries={countries}/> : <LoadingComponent />
               }
        </>
    )
}

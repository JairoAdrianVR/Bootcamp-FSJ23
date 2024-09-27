import { useCountriesData } from "../../hooks/useCountriesData";
import { ListCountries } from "./components/ListCountries";
import { useState } from "react";
import { LoadingComponent } from '../../components/LoadingComponent';


export const Countries = () => {
  const [region,setRegion] = useState('');
  const [name, setName] = useState('');

    /* 1. TRAER LA INFO DE LA API */
    const countries = useCountriesData(region, name);


    /* Pintar esta INFO */
  return (
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
    onChange={(e) => setName(e.target.value)
    
    }
  />
</label>
{  countries.length > 0 ?  <ListCountries countries={countries}/> : <LoadingComponent />
               }
    </>
  )
}

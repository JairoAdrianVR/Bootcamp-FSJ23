import { useCountriesData } from "../../hooks/useCountriesData";
import { ListCountries } from "./components/ListCountries";

export const Countries = () => {

    /* 1. TRAER LA INFO DE LA API */
    const countries = useCountriesData();


    /* Pintar esta INFO */
  return (
    <>
        <ListCountries countries={countries} />
    </>
  )
}

import { useCountriesData } from "../hooks/useCountriesData"
import { ListCountries } from "./components/ListCountries";

export const Countries = () => {
    //Recibiendo la informacion del hook useCointriesData
    let countries = useCountriesData();

    return(
        <>
            <h1>List of Countries</h1>
            {/* Aca agrego mi codigo JS*/}
            {/* Renderizado condicional -> OPCION DE MOSTRAR UN DATO O OTROS*/}
            {  countries.length > 0 ?  <ListCountries countries={countries}/> :  (
                <div className="flex flex-col items-center">
                  <iframe src="https://lottie.host/embed/d075c402-1ed0-45c3-83b5-e19c8129ec40/oO1BA53nqt.json"></iframe>
                  <h1>Loading...</h1>
                </div>
              )
               }
        </>
    )
}

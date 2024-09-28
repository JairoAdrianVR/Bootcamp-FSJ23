import { ICountry } from "../../../models/ICountry"
import { CardCountry } from "./CardCountry"

interface ICountriesProps{
    countries: ICountry[]
}

export const ListCountries:React.FC<ICountriesProps> = ({countries}) => {
  return (
    <>
    {countries.map((country,index) => <section key={index} ><CardCountry country={country} /></section>)}
    </>
  )
}

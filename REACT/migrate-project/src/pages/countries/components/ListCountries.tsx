import { ICountry } from "../../../models/ICountry"

interface ICountriesProps{
    countries: ICountry[]
}

export const ListCountries:React.FC<ICountriesProps> = ({countries}) => {
  return (
    <>
    {countries.map((country) => <h3>{country.name.common}</h3>)}
    </>
  )
}

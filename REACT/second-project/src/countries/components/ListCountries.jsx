import { CardCountry } from "./CardCountry"

export const ListCountries = ({countries}) => {

  return (
    <div > 
        {
            countries.map( (country,index) => {
                return <div key={index} > <CardCountry  country={country}/> </div>  })
        }
    </div>
  )
}


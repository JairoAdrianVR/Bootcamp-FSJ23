
export const CardCountry = ({country}) => {

  return (
    <>
        <article className="card" style={{'width': '18rem'}}>
            <img src={country.flags.png} className="card-img-top" alt={`flag-${country.name.common}`}/>
        <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <p className="card-text">{country.region}</p>
        </div>
        </article>
    </>
  )
}

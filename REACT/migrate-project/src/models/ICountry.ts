//Modelo ES LA REPRESENTACION DE UN DATO A MANIPULAR/GUARDAR
export interface ICountry{
    name : { common:string },
    flags: { svg:string },
    capital: string[],
    region: string,
    languages?: {eng?:string}
}

/* 
    REPRESENTAR EL OBJETO -> MODELO 

    country
        name.common
        flags.png
        capital
        region
        languages[]
*/
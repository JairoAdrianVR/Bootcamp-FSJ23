const btnAsync = document.getElementById('btnAsync');

//SetTimeout -> Limitar en base al tiempo, la demora de ejecucion de una funcion
btnAsync.addEventListener('click',() => {
    setTimeout(() => { 
        console.log("Holiwi");
    },2000);
    console.log("Me apretaste");

})


//Promesas

function funcionAsincronica(){

    return new Promise((resolve)=>{
        setTimeout(() => {
               resolve("Aca tenes lo que pediste") 
        },2000)
    })
}


//Manipulacion de asincronismo
//Then y Catch
funcionAsincronica().then((mensaje) =>{ console.log(mensaje)})

//Async y Await
async function ejecutarTareaAsincrona(){
    const resultado = await funcionAsincronica();
    console.log(resultado);
}
ejecutarTareaAsincrona();

// Uso de Fetch
function peticionFetch(){
    //Enviamos a fetch a buscar los datos a la API
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(
            (response) => { 
                //Manejamos la respuesta objeto de tipo Response
               // console.log(response);
                return response.json()
            }
        )
        .then(data => {
            //Manipulamos la informacion que me trae esta respuesta
            console.log(data);
        })
        .catch((error) => {
            //El hermano nos da las malas noticias
                console.error('Obtuvimos este error, que grande somos',error);
        })
}

peticionFetch();

async function peticionAwait(){
    try{
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditt")
        let data = await response.json();
        console.log(data);
    }catch (error) {
        console.error('Error al obtener el pokemon pa',error);
    }
}

peticionAwait();
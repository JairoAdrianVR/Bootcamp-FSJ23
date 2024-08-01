const contenedorCarrito = document.querySelector('#lista-carrito tbody');
let cursosCarrito = [];

function agregarCurso(evento){
    console.log("Estoy agregando el curso...");
    let cursoSeleccionado = evento.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
}

function leerDatosCurso(curso){
    console.log(curso.querySelector('a').getAttribute('data-id') );


    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id') ,
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1
    }

    //Comprobar previamente si el curso esta en el listado 
    const existe = cursosCarrito.some( (curso) => curso.id == infoCurso.id );

    //Si existe aumentamos la cantidad, sino agregamos el curso
    if(existe){
            cursosCarrito.map( (curso) => {
                if(curso.id === infoCurso.id){
                    curso.cantidad += 1;
                    return curso; //Guardar el curso actualizado en el array de cursos
                }
            })
    }else{
        cursosCarrito.push(infoCurso);
    }
    
    console.log(cursosCarrito);
    pintarCarritoHTML()
}



function pintarCarritoHTML(){
    //Vaciamos el carrito de datos antiguos
    contenedorCarrito.innerHTML = '';

    cursosCarrito.map( (curso) => {

        //Creamos un elemento TR
        const fila = document.createElement('tr');

        //Asignar los valores del curso a cada COLUMNA
        fila.innerHTML = `
        <td> <img src="${curso.imagen}" width="100"></td>
        <td> ${curso.nombre}</td>
        <td> ${curso.precio}</td>
        <td> ${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `

        //Agregar la fila a el contenedor del carrito
        contenedorCarrito.appendChild(fila)
    })

}

function vaciarCarrito(e){
    e.preventDefault();
    cursosCarrito = [];
    contenedorCarrito.innerHTML = '';
}

function eliminarCurso(id){
    //console.log("Estoy eliminado esto");
    //Recorremos el array
    cursosCarrito.map( curso => {
        //Si el curso existe en el carrito
        if(curso.id == id){
            //Si la cantidad de ese curso es mayor a 1
            if( curso.cantidad > 1){
                //Reducimos su cantidad en 1
                curso.cantidad-= 1;
                return curso;
            }else{
            //Va a filtrar y guardar en cursosCarrito todos los que sean diferentes a ese curso
            cursosCarrito = cursosCarrito.filter( curso => curso.id != id );
            }
        }
    })
    pintarCarritoHTML();
}
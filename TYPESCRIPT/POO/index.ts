//Sintaxis de Clase

class Person{

//Inicializamos Propiedades -> Caracteristicas
nombre:string;
edad:number;

//Contructor
constructor(nombreParam:string,edadParam:number){
    this.nombre = nombreParam;
    this.edad = edadParam;
}

}


let estudiante:Person = {nombre:"Chris",edad: 22};
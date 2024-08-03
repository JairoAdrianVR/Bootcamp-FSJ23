//Sintaxis de Clase

class Person{

/*** Inicializamos Propiedades -> Caracteristicas
 * Encapsulamiento: Limitar el acceso a informacion de una clase a traves de MODIFICADORES DE ACCESO
 * Public -> DEJA PUBLICA LA INFORMACION (ESTE MODIFICADOR VIENE POR DEFECTO)
 * Private -> La informacion solo es accedida dentro de la clase
 * Protected -> La informacion solo sera accedida por su clase y sus hijos
*/
protected name:string;
protected age:number;
protected dui:number;

//Contructor
constructor(nameParam:string,ageParam:number,duiParam:number){
    this.name = nameParam;
    this.age = ageParam;
    this.dui = duiParam;
}

//Abstraccion -> Es la capacidad de dar acceso a informacion limitada
//Metodos 
 correr():string {
    return "Estoy corriendo";
 }

 //Abstraccion se representa con 2 tipos de metodos
 //Getters -> Sirven para obtener informacion
 getName():string {
    return this.name;
 }

 getDui():number {
    return this.dui;
 }

 getAge():number {
    return this.age;
 }

 //Setters -> Sirven para CAMBIAR la informacion
setAge(ageParam:number) :void {
    this.age = ageParam;
}

}


//Herencia -> Capacidad de una clase hija de adquirir atributos y comportamientos del padre

class Developer extends Person{
    //Declaramos la propiedad de la clase
    private languages:string[];

    constructor(nameParam:string,ageParam:number,duiParam:number,languagesParam:string[]){

        //Metodo para heredar propiedades 
        //super() Lo que hace es tratar a los parametros del constructor igual que lo hace su clase padre
        super(nameParam,ageParam,duiParam);
        
        //Propiedad de Developer que no esta en Person
        this.languages = languagesParam;
    }

    getLanguages():string[]{
        return this.languages;
    }

    addLanguage(newLanguage:string):void{
        this.languages.push(newLanguage);
    }

    //Polimorfismo -> Es un cambio de comportamiento de la clase Hija a la clase Padre
    correr(): string {
        return "Soy developer, yo no corro. Toy chiquito"
    }

}

// let estudiante:Person = {name:"Chris",age: 22};
let student:Person = new Person("Marcial",24,87654321);
console.log(student);
/* ERROR AL CAMBIAR EL MODIFICADOR DE ACCESO A PROTECTED
student.name = "Jaira";
console.log(student);
*/
student.setAge(23);
console.log(student.getAge());
console.log(student.correr());



let judith:Developer = new Developer("Judith",20,12345678,["HTML","CSS","JAVASCRIPT","REACT","PHP","LARAVEL","MYSQL"]);
console.log(judith);
judith.setAge(21);
console.log(judith.getAge());
console.log(judith.correr());


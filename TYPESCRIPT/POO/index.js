//Sintaxis de Clase
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //Contructor
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    //Abstraccion -> Es la capacidad de dar acceso a informacion limitada
    //Metodos 
    Person.prototype.correr = function () {
        return "Estoy corriendo";
    };
    //Abstraccion se representa con 2 tipos de metodos
    //Getters -> Sirven para obtener informacion
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getDui = function () {
        return this.dui;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    //Setters -> Sirven para CAMBIAR la informacion
    Person.prototype.setAge = function (ageParam) {
        this.age = ageParam;
    };
    return Person;
}());
//Herencia -> Capacidad de una clase hija de adquirir atributos y comportamientos del padre
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(nameParam, ageParam, duiParam, languagesParam) {
        //Metodo para heredar propiedades 
        //super() Lo que hace es tratar a los parametros del constructor igual que lo hace su clase padre
        var _this = _super.call(this, nameParam, ageParam, duiParam) || this;
        //Propiedad de Developer que no esta en Person
        _this.languages = languagesParam;
        return _this;
    }
    Developer.prototype.getLanguages = function () {
        return this.languages;
    };
    Developer.prototype.addLanguage = function (newLanguage) {
        this.languages.push(newLanguage);
    };
    //Polimorfismo -> Es un cambio de comportamiento de la clase Hija a la clase Padre
    Developer.prototype.correr = function () {
        return "Soy developer, yo no corro. Toy chiquito";
    };
    return Developer;
}(Person));
// let estudiante:Person = {name:"Chris",age: 22};
var student = new Person("Marcial", 24, 87654321);
console.log(student);
/* ERROR AL CAMBIAR EL MODIFICADOR DE ACCESO A PROTECTED
student.name = "Jaira";
console.log(student);
*/
student.setAge(23);
console.log(student.getAge());
console.log(student.correr());
var judith = new Developer("Judith", 20, 12345678, ["HTML", "CSS", "JAVASCRIPT", "REACT", "PHP", "LARAVEL", "MYSQL"]);
console.log(judith);
judith.setAge(21);
console.log(judith.getAge());
console.log(judith.correr());

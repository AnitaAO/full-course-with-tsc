import { login, User } from './interfaces'

class Employee {
    id!: number;
    name!: string;
    address!: string
}
let john = new Employee();

john.id = 1
john.name = 'John'
john.address = 'Highway 20'

console.log(john)

//another routes using constructors in a class
//remove default values (!) from the fields
class Staff implements login {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address
    }

    Login(): User {
        return {name: 'Grace', id: 2, email: 'you@domain.com'}
    }

    //using a method to access a class
    getStaffWithAddress(): string {
        return `${this.name} ${this.address}`
    }
}
let Grace = new Staff (1, 'Grace', 'Ayodele 20')
let profile = Grace.getStaffWithAddress()
//in order to use the properties of a class in a method, 
//the method only accesses the mutated data/properties of 
//Staff; Grace. the method getStaffWithAddress cannot 
//access the Staff field directly
console.log(Grace)
console.log(profile)

//MAKING A CLASS FIELD PRIVATE 
//use # or private as prefix with the field item line 48 or 49 
//it means it is not accessible outside the class
//when you make a field private, make it private in the 
//constructor otherwise it will still be accessible
class Technology {
    id: number;
    #name: string;
    // private name: string or line 49
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.#name = name;
        this.address = address
    }
 
    //using a method to access a class
    getTechnologyWithAddress(): string {
        return `${this.#name} ${this.address}`
    }

}
let Frontend = new Technology (1, 'Mabel', 'Brick Crescent 2')
//you cannot access for instance Frontend.name here because it's private (#name)

console.log(Frontend) //#name was remove in the Frontend 
//console because it's not accessible anymore


//MAKING A CLASS FIELD PROTECTED PRIVATE 
//use protected as a prefix for the field element line 76
//protected would not allow accessing the field in instance
//say at designer.address outside the class
class Product {
    id: number;
    name: string;
    protected address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address
    }
 
    //using a method to access a class
    getProductWithAddress(): string {
        return `${this.name} ${this.address}`
    }

}

let Designer = new Product (1, 'Mabel', 'Brick Crescent 2')
console.log(Designer) 


//A CLASS EXTENDS ANOTHER CLASS 
//use protected as a prefix for the field element line 76
//protected would not allow accessing the field in instance
//say at designer.address outside the class
class Old {
    id: number;
    name: string;
    protected address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address
    }
 
    //using a method to access a class
    OldWithAddress(): string {
        return `${this.name} lives in ${this.address}`
    }
}

let Senior = new Old (1, 'Gabriel', 'Tailor Crescent 222')
console.log(Senior)

class New extends Old{
    constructor(id: number, name: string, address: string){
        super(id, name, address)
    }

    newWithAddress(): string{
        return `${this.name} stays at ${this.address}`
    }
}

//create a new instance;
let Junior = new New(1, 'Greg', 'Church Str. 30')
console.log(Junior.OldWithAddress())
console.log(Junior.newWithAddress())
//The new instance created with the properties the later
//class can use the method and properties in the old/former 
//class but the old class cannot use the method inside the 
//new class

//A STATIC CLASS 
//The only way to use static method is by calling the class directly
//You CANNOT create an instance with a static method
 
class Angular {
    id: number;
    name: string;
    address: string

    static getEmployeeAttendance(): number{
        return 20
    }

    constructor(id: number, name: string, address: string){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(){
        return `${this.name} resident at ${this.address}`
    }
}

let Yoruba = new Angular(1, 'Biola', 'Agege 71')

console.log(Yoruba)

console.log(Yoruba.getNameWithAddress)

// console.log(Yoruba.getEmployeeAttendance) will not work 
//because you cannot create an instance of a static method 
//rather you call the static method directly line 173

console.log(Angular.getEmployeeAttendance());


//GETTERS AND SETTERS
class Fruits {
    #id: number
    protected name: string
    market: string

    get empId(): number{
        return this.#id
    }

    set empId(id: number){
        this.#id = id
    }

    static getSpoiltFruitCount(){
        return 20
    }

    constructor(id: number, name: string, market: string) {
        this.#id = id
        this.name = name
        this.market = market
    }
}

let firstBatch = new Fruits(1, 'Mango', 'Mushin')

firstBatch.empId = 100

console.log(firstBatch.empId)

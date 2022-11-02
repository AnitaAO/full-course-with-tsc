"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Technology_name, _Fruits_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
}
let john = new Employee();
john.id = 1;
john.name = 'John';
john.address = 'Highway 20';
console.log(john);
//another routes using constructors in a class
//remove default values (!) from the fields
class Staff {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Login() {
        return { name: 'Grace', id: 2, email: 'you@domain.com' };
    }
    //using a method to access a class
    getStaffWithAddress() {
        return `${this.name} ${this.address}`;
    }
}
let Grace = new Staff(1, 'Grace', 'Ayodele 20');
let profile = Grace.getStaffWithAddress();
//in order to use the properties of a class in a method, 
//the method only accesses the mutated data/properties of 
//Staff; Grace. the method getStaffWithAddress cannot 
//access the Staff field directly
console.log(Grace);
console.log(profile);
//MAKING A CLASS FIELD PRIVATE 
//use # or private as prefix with the field item line 48 or 49 
//it means it is not accessible outside the class
//when you make a field private, make it private in the 
//constructor otherwise it will still be accessible
class Technology {
    constructor(id, name, address) {
        _Technology_name.set(this, void 0);
        this.id = id;
        __classPrivateFieldSet(this, _Technology_name, name, "f");
        this.address = address;
    }
    //using a method to access a class
    getTechnologyWithAddress() {
        return `${__classPrivateFieldGet(this, _Technology_name, "f")} ${this.address}`;
    }
}
_Technology_name = new WeakMap();
let Frontend = new Technology(1, 'Mabel', 'Brick Crescent 2');
//you cannot access for instance Frontend.name here because it's private (#name)
console.log(Frontend); //#name was remove in the Frontend 
//console because it's not accessible anymore
//MAKING A CLASS FIELD PROTECTED PRIVATE 
//use protected as a prefix for the field element line 76
//protected would not allow accessing the field in instance
//say at designer.address outside the class
class Product {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    //using a method to access a class
    getProductWithAddress() {
        return `${this.name} ${this.address}`;
    }
}
let Designer = new Product(1, 'Mabel', 'Brick Crescent 2');
console.log(Designer);
//A CLASS EXTENDS ANOTHER CLASS 
//use protected as a prefix for the field element line 76
//protected would not allow accessing the field in instance
//say at designer.address outside the class
class Old {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    //using a method to access a class
    OldWithAddress() {
        return `${this.name} lives in ${this.address}`;
    }
}
let Senior = new Old(1, 'Gabriel', 'Tailor Crescent 222');
console.log(Senior);
class New extends Old {
    constructor(id, name, address) {
        super(id, name, address);
    }
    newWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
//create a new instance;
let Junior = new New(1, 'Greg', 'Church Str. 30');
console.log(Junior.OldWithAddress());
console.log(Junior.newWithAddress());
//The new instance created with the properties the later
//class can use the method and properties in the old/former 
//class but the old class cannot use the method inside the 
//new class
//A STATIC CLASS 
//The only way to use static method is by calling the class directly
//You CANNOT create an instance with a static method
class Angular {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    static getEmployeeAttendance() {
        return 20;
    }
    getNameWithAddress() {
        return `${this.name} resident at ${this.address}`;
    }
}
let Yoruba = new Angular(1, 'Biola', 'Agege 71');
console.log(Yoruba);
console.log(Yoruba.getNameWithAddress);
// console.log(Yoruba.getEmployeeAttendance) will not work 
//because you cannot create an instance of a static method 
//rather you call the static method directly line 173
console.log(Angular.getEmployeeAttendance());
//GETTERS AND SETTERS
class Fruits {
    constructor(id, name, market) {
        _Fruits_id.set(this, void 0);
        __classPrivateFieldSet(this, _Fruits_id, id, "f");
        this.name = name;
        this.market = market;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Fruits_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Fruits_id, id, "f");
    }
    static getSpoiltFruitCount() {
        return 20;
    }
}
_Fruits_id = new WeakMap();
let firstBatch = new Fruits(1, 'Mango', 'Mushin');
firstBatch.empId = 100;
console.log(firstBatch.empId);

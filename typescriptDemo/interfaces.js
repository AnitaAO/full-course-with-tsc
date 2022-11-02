"use strict";
//1. Creating interfaces
//2. Using Interfaces
//3. Implementing Interfaces
//4. Extending Interfaces
//5. Optional Properties
//6. Object destructuring
//7. Array destructuring
//started @ 1:58
Object.defineProperty(exports, "__esModule", { value: true });
//object destructuring by tranforming 18 to 17
let { name: userName, email: userLogin } = { name: 'Grace', id: 2, email: 'you@domain.com' };
// let Grace = new Staff (1, 'Grace', 'Ayodele 20') // I am just comparing class object line 18 to interface line 17
// let user: User = {name: 'Grace', id: 2, email: 'you@domain.com'}
userName.charAt(0);
let employee = { name: 'Mike', id: 1, email: '', salary: 2000 };
//object destructuring
let users = [
    { name: 'Hannah', id: 2, email: '' },
    { name: 'Mercy', id: 5, age: 30, email: '' },
    { name: 'Ego', id: 3, age: 22, email: '' },
    { name: 'Ayo', id: 4, email: '' }
];
//object destructuring using rest
let [user1, user2, ...restUsers] = [
    { name: 'Hannah', id: 2, email: '' },
    { name: 'Mercy', id: 5, age: 30, email: '' },
    { name: 'Ego', id: 3, age: 22, email: '' },
    { name: 'Ayo', id: 4, email: '' }
];
let newUser = users.map(user => user.id > 3);
let oldUser = users.filter(user => user.id < 3);
console.log(users[1].age || users[2].name);
console.log(user1);
console.log(restUsers);
console.log(newUser);
console.log(oldUser);

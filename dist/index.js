"use strict";
// Basic static typing in Typescript
let idx = 10;
// z = 'Hello World'  
// Shows an error because of wrong type
// index.ts:5:1 - error TS2322: Type 'string' is not assignable to type 'number'.
//tsconfig.json
// Changed outdir to ./dist
// Changed root directory to ./src
// Basic TypeScript Types
let id = 5;
let user = 'amen';
let isHappy = true;
let random = '';
//Arrays
let ids = [1, 2, 3, 4, 5];
let array = [20, 'hey', true];
//Tuple
let person = [1, 'John', false]; // with strict sequence checking
let employees;
employees = [
    ['Joe', 20000, true],
    ['Doe', 10000, false],
];
//Union
let userid;
userid = 20;
userid = 'CD058';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up, Direction1.down, Direction1.left, Direction1.right); // 0 1 2 3
const client = {
    id: 10,
    name: 'John'
};
//Type Assertion 
let cid = 1;
//Changing the type to a specific one
let customerID = cid;
//or
let customerId = cid;
//Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 5));
function log(message) {
    console.log(message);
}
const clientINTERFACE = {
    id: 10,
    name: 'John'
};
const multNum = (x, y) => x * y;
const subtNum = (x, y) => x - y;
class Student {
    constructor(id, name, age, hasPassed) {
        this.id = id,
            this.name = name,
            this.age = age,
            this.hasPassed = hasPassed;
    }
    register() {
        return `${this.name} is Registered.`;
    }
}
const student1 = new Student(58, 'Amen', 23, true);
const student2 = new Student(63, 'Joe', 23, true);
// Data Modifiers (PUBLIC VS PRIVATE VS PROTECTED)
student1.id = 69; // Works on Public | Won't work on Protected or Private
console.log(student1.register());

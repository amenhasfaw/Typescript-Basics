// Basic static typing in Typescript

let idx: number = 10;

// z = 'Hello World'  

// Shows an error because of wrong type
// index.ts:5:1 - error TS2322: Type 'string' is not assignable to type 'number'.


//tsconfig.json
// Changed outdir to ./dist
// Changed root directory to ./src

// Basic TypeScript Types

let id: number = 5;
let user: string = 'amen';
let isHappy: boolean = true;
let random: any = ''

//Arrays
let ids:number[] = [1,2,3,4,5]
let array:any[] = [20,'hey',true]

//Tuple
let person: [number,string,boolean] = [1,'John',false] // with strict sequence checking
let employees: [string,number,boolean][] 

employees = [
    ['Joe',20000,true],
    ['Doe',10000,false],
]



//Union
let userid:string | number

userid = 20;
userid = 'CD058'



//Enum

enum Direction1 {
    up,
    down,
    left,
    right,
}

console.log(Direction1.up,Direction1.down,Direction1.left,Direction1.right);  // 0 1 2 3


//Objects

type User = {
    id: number
    name: string
}


const client: { id: number, name: string } | User = {
    id: 10,
    name: 'John'
}


//Type Assertion 

let cid: any = 1;

   //Changing the type to a specific one
let customerID = <number>cid 
//or
let customerId = cid as number


//Function

function addNum(x:number,y:number):number{
    return x + y
}

console.log(addNum(3,5))

function log(message:string | number):void{
    console.log(message)
}


// Interface

//Can't use Interface with Primitive and Inteface

interface UserInterface{
    id: number
    name: string
}


const clientINTERFACE: { id: number, name: string } | UserInterface = {
    id: 10,
    name: 'John'
}

interface Mathfuc{
    (x:number,y:number):number
}

const multNum: Mathfuc = (x:number,y:number):number =>  x*y
const subtNum: Mathfuc = (x:number,y:number):number =>  x-y


//CLASSES

interface studentInterface{
    id:number
    name:string
    age:number
    hasPassed:boolean
    register():string
}

class Student implements studentInterface{
    id:number
    name:string
    age:number
    hasPassed:boolean

    constructor(id:number,name:string,age:number,hasPassed:boolean) {
        this.id = id,
        this.name = name,
        this.age = age,
        this.hasPassed = hasPassed
    }

    register(){
        return `${this.name} is Registered.`
    }

}


const student1 = new Student( 58, 'Amen' , 23 , true)
const student2 = new Student( 63, 'Joe' , 23 , true)

    // Data Modifiers (PUBLIC VS PRIVATE VS PROTECTED)

student1.id = 69; // Works on Public | Won't work on Protected or Private

console.log(student1.register());

    // Extending Classes

class InternationalStudent extends Student{
    country:string

    constructor(id:number,name:string,age:number,hasPassed:boolean,country:string) {
        super(id,name,age,hasPassed)
        this.country = country
    }

}

const student3 = new InternationalStudent(11,'Dave',20,true,'China')
console.log(student3.register())


// Generics
















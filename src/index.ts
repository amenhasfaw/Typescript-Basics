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





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

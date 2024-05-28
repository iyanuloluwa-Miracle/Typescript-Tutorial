//explicit types

let character:string;
let age: number;
let isLoggedIn: boolean;


age=40;

isLoggedIn = true;

let ninjas: string[] = [];

ninjas.push('shaun')

let mixed: (string|number|boolean)[] =[];

mixed.push('hello')
mixed.push(20);
mixed.push(false)
console.log(mixed)


let uid: string|number;
uid = '123';
uid = 123

let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};


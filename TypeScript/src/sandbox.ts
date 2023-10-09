// explicit types
let character: string;
let ages: number;
let isLoggedIn: boolean;

ages = 25;

isLoggedIn = true;
//arrays

let ninjas:string[] = [];

ninjas.push('Kittipol')

//union types
let mixed: (string | number)[] = [];
mixed.push('hello world');
mixed.push(20);

let uid: string|number;
uid = 'junk'
uid = 60;

// objects
let kittiOne: object
kittiOne = {name: 'Kittipol', age:30};

let kittiOne2: {
    name: string,
    age: number,
    beltColur: string
}

kittiOne2 = {name: 'Kittipol', age:20,beltColur: 'black'};

// any types

let jam: any = 25;

jam = true;

let mixed2: any[] = []

mixed2.push(5)
mixed2.push(true);

let mixed3: {name: any, age: any}

mixed3 = {name: 2, age:'lol'}

const fname:any = "nomain";
let lname:string = "surname";
lname = "lion";


let age:number = 10;
let isWorking:boolean = true;

console.log(`Name: ${fname.toUpperCase()} ${lname} ${age}`);

function formatNumber(num:any) {
     return num.toFixed(2);
}

let amount = 50.12345
formatNumber(amount)
console.log(formatNumber(amount))
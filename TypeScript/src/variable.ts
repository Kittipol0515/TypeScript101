const fname:any = "nomain";
let lname:string = "surname";
lname = "lion";


let age:number = 10;
let isWorking:boolean = true;

console.log(`Name: ${fname.toUpperCase()} ${lname} ${age}`);

function formatNumber(num:any) {
     return num.toFixed(2);
}

let amounts = 50.12345
formatNumber(amounts)
console.log(formatNumber(amounts)) 
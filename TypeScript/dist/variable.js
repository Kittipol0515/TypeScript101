"use strict";
const fname = "nomain";
let lname = "surname";
lname = "lion";
let age = 10;
let isWorking = true;
console.log(`Name: ${fname.toUpperCase()} ${lname} ${age}`);
function formatNumber(num) {
    return num.toFixed(2);
}
let amounts = 50.12345;
formatNumber(amounts);
console.log(formatNumber(amounts));

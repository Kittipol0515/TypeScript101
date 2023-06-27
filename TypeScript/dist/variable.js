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
let amount = 50.12345;
formatNumber(amount);
console.log(formatNumber(amount));

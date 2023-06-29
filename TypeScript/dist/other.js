"use strict";
function test(name) {
    if (!name) {
        return `Hello world`;
    }
    if (typeof name == 'string') {
        return `Hello ${name}`;
    }
    throw new Error("Worng test");
}
function total(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return (parseInt(a) + parseInt(b)).toString();
    }
    throw new Error('Invalid');
}
console.log(total(500, 500));
console.log(total('500', '1000'));

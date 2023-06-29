"use strict";
const section = ["Account", "financial"];
const department = ["Developer", "Marketing", "UX"];
department.push(...section);
console.log(department);
const total1 = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(100, 200);
console.log(100, 200, 300);
console.log(100, 200, 300, 400);
console.log(100, 200, 300, 400, 500);

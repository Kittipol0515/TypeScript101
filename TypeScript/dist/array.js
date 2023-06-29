"use strict";
// normal
let pp1 = {
    id: 1,
    name: "Kitti",
};
pp1.age = 25;
// array
const users1 = [];
users1.push(pp1);
// console.log(users1)
const users2 = [];
users2.push("Kitti", "Kitty", "Nomain");
const customers = [];
customers.push({
    name: "hing",
    city: "tokyo",
    credit: 123456789
});
customers.push({
    name: "God",
    city: "bangkok",
    credit: 4562143
});
for (let customer of customers) {
    console.log(customer);
}

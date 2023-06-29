// normal

// const user1: string = "user1"
// const user2: string = "user2";
type People = {
    readonly id : number,
    name: string,
    age?: number,
}

let pp1: People = {
    id : 1,
    name: "Kitti",
}

pp1.age = 25


// array
const users1:any[] = []

users1.push(pp1)

// console.log(users1)

const users2:string[] = []

users2.push("Kitti","Kitty","Nomain")

// users2[0] = "King" 

// console.log(users2[0])
// console.log(users2[1])
// console.log(users2[2])

// console.log(users2.length)

// for(let i = 0; i < users2.length; i++) {
//     console.log(`${i} ${users2[i]}`)
// }


// users2.forEach((element)=> {
//     console.log(element)
// })


type Customer = {
    name : string;
    city : string;
    credit: number;
}
 
const customers: Customer[] = []

customers.push({
    name: "hing",
    city: "tokyo",
    credit: 123456789
})

customers.push({
    name: "God",
    city: "bangkok",
    credit: 4562143
})

for ( let customer of customers) {
    console.log(customer)
}


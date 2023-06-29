//                  void

// function sayHi() {
//     console.log("Hi! good night");
// }

// sayHi()

//                 parameter

// function sayHi(name:string, age:number): void {
//     console.log(`Hello ${name} from ${age}`)
// }

// sayHi("Nomain",25)
// sayHi("Tarot",25)

//                  return

// function sayHi(name:string, age:number): void {
//     console.log(`Hello ${name} from ${age}`)
// }

// function getDiscount() : number {
//     return 500;
// }

// function getAddress() : string {
//     return "Tokyo"
// }

// console.log(getAddress())
// console.log(getDiscount())

// parameter and return

// const checkNumber=(num:number) : string => {
//     if(num % 2 === 0) {
//         return "even numbers"
//     } else {
//         return "odd numbers"
//     }
// }

// function total(a:number, b:number) : number {
//     return a+b
// }
// console.log(total(10,20))

// console.log(checkNumber(25))

// Default parameters

function showEmployee(name:string,age:number,address:string = "USA") {
    console.log(`name: ${name}, age: ${age}, address: ${address}`)
}

showEmployee('Nomain',25,'Tokyo')
showEmployee('Nomain',25,'Tokyo')
showEmployee('Nomain',25,'Tokyo')
showEmployee('Nomain',25)

const person = {
    name: "nomian",
    age: 25,
}

const person2:{name:string,age:number} = {
    name: "nomain",
    age: 30,
}

const position : {lat:number,long:number} = {
    lat : 20,
    long: 30
}

// const showDetail=(data:{name:string,age:number}) : void => {
//     console.log(`name: ${data.name} and age: ${data.age}`)
// }

// showDetail(person)

function randomPosition() : {lat:number,long:number}{
    return {
        lat:Math.random(),
        long:Math.random(),
    }
}

console.log(randomPosition())

function showInfo(data: {name:string, age:number}) {
    console.log(`name: ${data.name} and age: ${data.age}`)
}

const person3 = {
    name: 'John',
    age: 30,
}

showInfo(person3)

// check property
//  showInfo({name: 'John',
//  age: 30,
// })
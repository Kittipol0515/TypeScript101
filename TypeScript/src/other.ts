function test():string
function test(name:string):string
function test(name?:unknown):unknown {
    if(!name) {
        return `Hello world`
    }
    if(typeof name == 'string') {
        return `Hello ${name}`
    }
    throw new Error("Worng test")
}

// console.log(test())
// console.log(test("lion"))


// function total(a:number, b:number):number {
//     return a+b
// }

// function total(a:string, b:string):string {
//     return (parseInt(a) + parseInt(b)).toString()
// }


// console.log(total('300','500'))

function total(a:number, b:number):number
function total(a:string, b:string):string
function total(a: unknown, b: unknown): unknown {
    if(typeof a === 'number' && typeof b === 'number')  {
        return a+b;
    }
    if(typeof a === 'string' && typeof b === 'string')  {
        return (parseInt(a) + parseInt(b)).toString()
    }
    throw new Error ('Invalid')
}

console.log(total(500,500))
console.log(total('500','1000'))



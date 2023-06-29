const section:string[] = ["Account","financial"]
const department:string[] = ["Developer","Marketing","UX"]

department.push(...section)


console.log(department)

const total1=(...numbers:number[]) => {
    return numbers.reduce((result,value) => {
        return result + value
    },0)
}

console.log(100,200)
console.log(100,200,300)
console.log(100,200,300,400)
console.log(100,200,300,400,500)
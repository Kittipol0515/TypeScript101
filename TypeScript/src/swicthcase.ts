let service: number=3
let result: string

switch (service) {
    case 1: result = "How mauch in bank";
    break;
    case 2: result = "deposit in bank";
    break;
    case 3: result = "Withdraw in bank";
    break;
    default: result = "Not enough information"
    break;
}

console.log(`total: ${result}`)
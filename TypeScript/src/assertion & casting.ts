type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific

let a: One = 'hello';
let b = a as Two; // less specific type
let c = a as Three; // more specific type

let d = <One>'world'
let e = <string | number>'world'
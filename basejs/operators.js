/**
 * a. Mathematical Operators 
 *  +, -, *, /, %
 * b. Increment or decrementors Operators 
 *  ++, --
 * c. String/Concatination Operator 
 *  +, ,
 * d. Assignment Operators
 *  =, +=, -=, *=, /=, %=
 * e. Comparision Operators 
 *  <, >, <=, >=, ==, !=, ===, !==
 * f. Logical Operators 
 *  &&, ||, !
 * g. Conditional or Ternary Operators 
 *  (exp) ? true : false
 * h. Template Literals 
 *  `${}`
 * i. Spread and Rest Operators
 *  ...
 * j. Object Destructrue
 *  declarationType {keys,...rest} = objectData
 *      
 */

let a = 10;
let b = 3;

let c =  a / b;     //  3.33333333333333
let d = a % b;      // 1    remainder

// a = 10
a = a + 1       // a => prev of a + 1  assign to a
// a = 11
a++     // a = a + 1
// a = 12
++a     // a = a + 1
// a = 13

console.log(a++)      // post assign  // print => increment => assign -> output: 13, value: 14
// a = 14
console.log(++a)     // pre assign   // output: 15, value: 15 increment => assign => print
//a = 15


let x = 10;     // number
let y = '10';   // string 

let z = x + y   // output: error, 1010, "10", 10"10"
console.log("Sum of x and y is: ", z)
// number + string 


a = 10
a = a + 1
a++
++a
a += 2;

let name = "Sandesh "
let lastName = "Bhattarai"

// name = name + lastName      // string + string  => concat
name += lastName

console.log(name)       // Sandesh Bhattarai


let emailTemplates = `Dear ${name}<br/> 
Thank you for your registration.
Please click the link below to activate your account
`
emailTemplates += " please click the link below to activate your account"


x = 10
y = '10'

console.log(x <= y)      // true 
console.log(x == y)     // true 
console.log(x === y)        // false 
console.log(x !== y)        // true 
console.log(x != y)     // false 


console.log((x <= y) && (x === y))
console.log((x === y) || (x <= y))

console.log(!(x <= y))

console.log((x > 10) ? "X is greater than 10" : "X is less than or equal to 10")

// (exp) ? (
//     (exp1) ? (
//         exp2 ? "" : 
//     ) : ""
// ) : ""

const studentsName = ["Student One", "studnet two"]

const students = [...studentsName, "Student Three"]

const user = {
    name: "Sandesh Bhattarai",
    email: "sandesh@broadwayinfosys.com",
    address: "Kathmandu"
}

const admin = {
    ...user,
    trainer: "MERN",
    role: "Trainer"
}

// object destucture, rest operator 
const {email: emailAddress, address, ...other} = admin
console.log(emailAddress)  ;  // "sandesh@broadwayinfosys.com",
// const address = admin.address;
// const email = admin.email 
// other.name

const user1 = {
    name: "Sandesh"
}
const user2 = {...user1};
console.log(user1)      // {name: "Sandesh"}
console.log(user2)      // {name: "Sandesh"}

user2.name = "Updated Name"

console.log(user1)      // {name: "Sandesh"}
console.log(user2)      // {name: "Updated Name"}
// user2 changes  ===> reflects user1
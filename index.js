console.log("Hello world")

/** 
 * document.write("<h1>Hello world</h1>")
 * */ 
// Variables, constants
// Variable 
// let, var

var xyz = "Sandesh Bhattarai"
let name = 'Sandesh Bhattarai'

console.log(xyz)   // Sandesh Bhattarai
console.log(name)

xyz  = "Bhattarai Sandesh"
console.log(xyz)   // Bhattarai Sandesh

// Scope 
    // a. Global 
    // b. Block / local 

var x = 10
console.log(x); // 10 
{
    // block 
    var x = 20
    console.log(x)  // 20
}
// var x = 123;
console.log(x)      // ? 20

let y = 10;     // block, global
console.log(y)
{
    let y = 20      // block variable
    console.log(y)  // 20
}
console.log(y)      // block = 10, global =  20


// constants 
const GRAVITY = 9.8
const PI = null;


// Data types 
/** 
 * a. String / Text 
 *  "", '', ``
 *  b. Numbers 
 *      intger, 
 *      float,
 *      bigint
 *  c. Boolean 
 *      true, false 
 *  d. Null 
 *      null
 * 
 *  e. undefined 
 * f. Array 
 * g. Object/Json data 
 *  h. function
 * i. symbol
 * j. set 
*/

let phone = 9e100       // 9 x 10^100
let bool = true 
let nullData = null;        // "", '', 

// let a;          // data type => undefined

// a = "123";


// coupling 
let name_1 = "Sandesh"
name_1 = 123;


// let name_2: string = "Sandesh"
// name_2 = 123    // error


console.log(typeof name_1)  /// numbe   r

let a = "";                 // string
let b = '';                 // string
let c = ``;                 // string
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// debugger;

// let str = `
// adfasdfsafsdfcv ${b} asdfasdfasfd
// `


let d = 123;                // number
let e = 1.23;                // number
let f = 1e23;                // number

let g = true;               // boolean
let h = false;              // boolean

let i = null;               // object

let j;                      // undefined

let k = [];                 // object
let l = {};                 // object
let m = function(){}        // functon
// let n = new Set()   // set()
// let o = Symbol()     //

 // number
// function addNumber(a, b = 0) {
//     const c =  a + b 
//     return c;
// }


function addNumber(a, b = 0) {
    const c =  a + b 
    const sub = a - b;
    return {sub, c};
    // code not executable 
}


let x = 10;
let y = 20;

const result = addNumber(x, y);

console.log(result.c) // 10, 30
console.log(result.sub) // 10, 30

const {c, sub} =addNumber(x,y)
console.log(c)
console.log(sub)


// a, b c=> functional variables, 
// limit scope only within function 
let a = 10;
let b = 20;
let d = 0;

function addNumber1() {
    d = a + b;
}

// a., b, c
//
console.log(d)          // 0 
addNumber()
console.log(d)      // 30


// arrow function 

// general functios 
function functionName1(para, params, pararam2) {
    // body 
    return ;
}
functionName1()
const functionName2 = function(para, params, params2) {
    // body 
    return ;
}
functionName2()
// arrow 
const functionName3  = (param, params, params2) => {
    // body 
    return ;
}
functionName3()

const obj = {
    functionName: function(param, params, param2) {
        // body
        // this  - is not available 
        return 
    }
}
obj.functionName();


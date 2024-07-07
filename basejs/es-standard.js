// ES 
    // JavaScript 
        // ECMA Script
            // ES 
    // 2015 => 
            // Typescript 
                // Cross platform Microsoft 
                    // js standard + type binding 
                        // hypbrid , web, mobile, desktop
            // React js 
            // vue js
            // SPA 
                // Single page application 

// Standard 
    // new features 
// ES5 
// ES6
    // ~ Es17~18
// native, vanilla js , core js 
// nodejs based 
// import export 
// API - es5 
// FE = es6
// import export 
export const ADMIN_URL = "http://admin-url.com"
export const obj = {

}

export const getName = () => {

}

class User {

}

export default User;
// execution
// es 5 
// es6 
    // es 6
        // e5
            // es5
                // es6 ===> .mjs
            // es6 
                // es5 ===> .cjs
// module.exports = {
//     User, 
//     getName,
//     obj, 
//     ADMIN_URL
// }

// Arrow function 
// es6 
// spread and rest (...)
    // es6 
// Object destructure 
    // es6
// Class based oop 
    // es6 
// template literals
    // es6 `${}`
// compiler


const user = {
    name: "Sandesh",
    email: "sandesh@broadwayinfosys.com",
    address: "Kathmandu"
}

const mernInstructor = {
    ...user,                    // spread
    language: "js,ts",
    stack: "MERN"
}

// const name = mernInstructor.name; 
// const email = mernInstructor.email;
// const stack =mernInstructor.stack

// const leftOver = {
//     address: mernInstructor.address, 
//     language: mernInstructor.language
// }

const {name, email, stack: langStack, ...leftOver} = mernInstructor
console.log(langStack)   // Sandesh

const user1 = {...user};

user1.name = "UPdated";

console.log(user.name)   // name: "Sandesh"

// Feature 
    // Login 
        // -> User name 
        // -> password 
            // BE     
                // if not => error message 

// Agile 
    // Scrum 
// backlog 
    // bug open for task
// Sprint

//Reopend    Todo          In Progress      Idel          Code Review             Testing             PM Review           UAT                 Done 
//           Task...                                                                Task
// Task 
//                                          Task 
//           Task...        Task                                                                        Task
//          Cruical Bug      
//                                                                                                      Cruical Bug      
//                                                                                                                      Cruical Bug,Task
// bug open      
//                                                                                                                                          Cruical Bug,Task


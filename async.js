// // Time related 
// // executes the callback after mentioned time

setTimeout(() => {
    console.log("I am inside timeout with 3 sec.")
}, 3000)
// setInterval()

setTimeout(() => {
    console.log("I am inside timeout with 1 secd")
}, 1000) 


// polling
const interval = setInterval(()=> {
    console.log("I am executed on every second")
}, 1000)


setTimeout(() => {
    clearInterval(interval)
}, 10000)
// console.log("I am inside timeout with 3 sec")
// console.log("I am inside timeout with 1 sec")


// fs ===> file hanldin 

// writeFile    // 30sec 
    // exists => open 
        // create => opean 
        // => pointer 
    // write operation 
        // string => data 
            // 
    // close 
// operation
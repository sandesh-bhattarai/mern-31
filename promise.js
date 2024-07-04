// Promise is a commitment
// fulfill 
// reject

// Promise is an object data of class Promise
// 3 stages 
// Pending 
// resolve/Fulfilled  // Reject/Reject
// settlement 

// Promises are always asynchronous

// how to create a promise 

const promiseObj = new Promise((resolve, reject) => {
    // timeconsume
    // output 
    // success 
    // resolve({name: "Sandesh"})           // fulfilled stage return 
        // code meaningless
    reject({reason: "Test data"})        // Exception throw 
})


// console.log(promiseObj.name)              // resolve => {name }

// .then().catch() or async-await
let loading = true;
promiseObj
    .then((response) => {
        // promise => resovle (data) => response
        //
        console.log(response.name)
        
        // codes
        // 
        // loading = false
    })
    .catch((exception) => {
        console.log(exception)
        
        // loading = false// codes

    })
    .finally(() => {
        loading = false
    })
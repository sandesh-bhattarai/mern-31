const func1 = () => {
    return new Promise((res, rej) => {
        const x = true; 

        if(x) {
            res("I am resolve of func1")
        } else {
            rej("I am reject of func1")
        }
    })
}

const func2 = () => {
    return new Promise((res, rej) => {
        const x = false; 
        
        if(x) {
            res("I am resolve of func2")
        } else {
            rej("I am reject of func2")
        }
    })
}

const func3 = () => {
    return new Promise((res, rej) => {
        const x = true; 
        
        if(x) {
            res("I am resolve of func3")
        } else {
            rej("I am reject of func3")
        }
    })
}


const handleChain = async() => {
    try {
        const res1 = await func1()
        console.log(res1)
        const res2 = await func2()
        console.log(res2)
        const res3 = await func3()
        console.log(res3)
    } catch(exception) {
        console.log(exception)
    }
}
handleChain()

// nesting 
// func1()
//     .then((res1) => {
//         // func2
//         console.log(res1)

//         func2()
//             .then((res2) => {
//                 // 
//                 console.log(res2)
        
//                 func3()
//                     .then((res3) => {
//                         console.log(res3)
//                     }) 
//                     .catch((exception) => {
//                         console.log(exception)
//                     })
//             })
//             .catch((exception) => {
//                 console.log(exception)
//             })
//     })
//     .catch((exception)=> {
//         console.log(exception)
//     }) 

func1()
    .then((res) => {
        console.log(res)
        return func2()
        // 
    })
    .then((res2) => {
        console.log(res2)
        return func3()
    })
    .then((res3) => {
        console.log(res3)
    })
    .catch((excepton) => {
        console.log(excepton)
    })


    // func1(), func2(), func3()

    // either all resolved 
    // or some resolve
const prom1 = func1()
const prom2 = func2()
const prom3 = func3()

// at once 
    // resolve => if all resolved 
// import operation 
// Promise.all([prom1, prom2, prom3])
Promise.allSettled([prom1, prom2, prom3])
    .then((res) => {
        console.log(res);
    })
    // .catch((exception) => {
    //     console.log("1. ")
    //     console.log(exception)
    // })




const alwaysResolve = () => {
    // return new Promise((res, rej) => {
    //     res("")
    // })
    // return Promise.reject("")
    return Promise.resolve("")
}

alwaysResolve().then();


const handleAsync = async () => {
    await func1()
}
// codes

handleAsync()


const func123 = async () => {
    // try {
        // logic 
        let x = false 
        if(x) {
            return "Resolve of func1"
        } else {
            throw "I am reject of func1"
        }
    // } catch(exception) {    
    //     throw exception;
    // }
}


const handles = async () => {
    try {
        await  func123() // resolve
    } catch(exception) {
        console.log(exception)
    }
}
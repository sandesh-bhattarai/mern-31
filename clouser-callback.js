// generate a random number in js 
// assign some random value to a varibale. 
// Print Found and no of iteration used to get the value. 
// Condition: 
// the value should be less than 100 
// random number generated should be also less than 100;

// randomNo = 30
// function -> found, iteration 
    // random number => 100 less 
const numbToGet = 30
// function
    const randomNo = Math.ceil(Math.random()) * 100;
        // find -> numToGet




const func1 = () => {           // 2sec
    // dbquery  // millisec 800ms
    
    const fun2 = (x) => {           // 1sec
        const result = x * 2;
        // 100ms
        return result;
    } 

    return fun2(1)
    //
}


// async 
    // time delay 
    // Promise 
    // asyn-await 
const b = func1()
// const b = fun2(a)

console.log(b)


//callback 
// functions => as an argument of another function 


const fun1 = (arg) => {
    // compleete
    arg()
}

const fun2 = ()  => {

}

func1(fun2);

func1(() => {
    // code block 
})
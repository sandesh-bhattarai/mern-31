// const guess = 75;

// let counter = 0;

// const getGuess = () => {
//     counter++
//     const random = Math.ceil(Math.random() * 100)
//     console.log(random)
//     if(random === guess) {
//         console.log("Match found on Iteration :"+counter)
//     } else {
//         getGuess();
//     }
// }

// getGuess()

// const func1 = () => {
//     const func2 = () => {
//         return 2
//     }

//     // return func2()
//     return func2;
// }

// const result = func1()  // () => {}
// result()        // func2()
// // func2()

const func1 = (cb) => {
    console.log("I am in function 1")
    cb()
}

const func2 = () => {
    console.log("I am in function 2")
}

func1(func2)


const products = [
    {
        name: "Product One",
        price: 100,
        discount: 10
    },
    {
        name: "Product Two",
        price: 200,
        discount: 10
    },
]
// for(let prod of products) {
//     // calculate
// }

// array loop
// const productLoop = () => {} 
products.map((value, index) => {
    // calculate
    // return default undefined
    const afterDis = value.price - (value.price * value.discount/100)
    value['afterDiscount'] = afterDis
});

console.log(products);


const numb = [1,2,3,4,5,6,7,8,9,10]
// const numb1 = numb.map((val, ind) => { 
//     return val * 2
// })

const numb1 =numb.map((val, ind) => val * 2)
console.log(numb1)
// const numb1 = [2, 4, 6, 8, 10]

// two array 
// one is of odd numbers 
// another is of even number

let oddNumbs = []
let evenNumbs = []

numb.forEach((val, ind) => {
    if(val % 2 === 0) {
        evenNumbs.push(val)
    }  else {
        oddNumbs.push(val)
    }
    // return undefined 
})

evenNumbs = numb.filter((val, ind) => val % 2 === 0)
oddNumbs = numb.filter((val, ind) => val % 2 !== 0)

console.log(oddNumbs)       // [1,3,5,7,9]
console.log(evenNumbs)      // [2,4,6,8,10]


// ecommerce => 100 product 
// 40 products discount 
// 


const numbList = [1,2,3,4,5,6,7,8,9,10]

// loop => present, past 
const result = numbList.reduce((sum, currv) => {
    console.log(sum, currv)
    sum += currv
    // return sum;
    // sum = currv;
    return sum
})

console.log(result)

// .every
// .some
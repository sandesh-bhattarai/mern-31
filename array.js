// let name = "Sandesh"
// let email = "sandesh@broadwayinfosys.com"
// let address = "Kathmandu"
// let phone = 1231231231

// elements are stored in index value pair 
// index always begins from 0
// every elements in an array are being separated by comma,
// An array can store any data type 

//  0           1           2   .....
// [element1, element2, element3, ...]

let user_1 = ["Sandesh","sandesh@broadwayinfosys.com", "Kathmandu", 1231231231]
let user_2 = ["sandesh@broadwayinfosys.com","Sandesh", "Kathmandu", 1231231231]

let user_obj_1 = {
    name: "Sandesh",
    email: "sandesh@broadwayinfosys.com", 
    address: "Kathmandu", 
    phone: 1231231231
}

let user_obj_2 = {
    email: "sandesh@broadwayinfosys.com", 
    name: "Sandesh",
    address: "Kathmandu", 
    phone: 1231231231
}

console.log(user_obj_1.name)
console.log(user_obj_2.name)
// email 
    // user_1[1]
    // user_0[0]



console.log(user_1[0])  //
console.log(user_1[1])  //
console.log(user_1[2])  //
console.log(user_1[3])  //

console.log(user_2[0])  //
console.log(user_2[1])  //
console.log(user_2[2])  //
console.log(user_2[3])  //



// let user_1_1 = new Array()


const product_1 = {
    name: "Product One",
    price: 1000, 
    dicount: 10,
    category: "Cat 1"
}
const product_2 ={
    name: "Product Two",
    price: 2000, 
    dicount: 5,
    category: "Cat 1"
}

const allProducts = [
    {
        name: "Product One",
        price: 1000, 
        dicount: 10,
        category: "Cat 1"
    },
    {
        name: "Product Two",
        price: 2000, 
        dicount: 5,
        category: "Cat 1"
    },
    {
        name: "Product Three",
        price: 1500, 
        dicount: 5,
        category: "Cat 2"
    }
]

console.log(allProducts[0].name)
console.log(allProducts[1].name)
console.log("")
// Create an array of objects to store the profile of students, 
// Your object data should contain name, email, address, phone, college name
// Your array should contain atlest 10 no of students. 
// Print in the following format: 
// Student Name: ..............
// Student Address: ..............
// Student Phone: ..............
// Student Email: ..............
// Student College Name: ..............
// 

// console.log("Student Name: ", student[0].name)
// // ...

// console.log("Student Name: ", student[1].name)
// // ...


const allUsers = [] // empty 
// insert data allUsers
//  a. At last/ end 
//  b. At top/first
//  c. At any position

let user1 = {
    name: "1",
    email: "", 
    address: ''
}
let user2 = {
    name: "2",
    email: "", 
    address: ''
}
// last position 
allUsers.push(user1, user2)
// allUsers => 2 data 
// [0 ind, 1 indx]

// first position
allUsers.unshift(user2);
// [0=> new, 0 => 1, 1 => 2]

// any 
// [0,1,2]
// allUsers.push()
allUsers.splice(1, 1, user1);
// 3 

// [0,1,2,3]
// update 
allUsers[5] =user1;
// [0,1,2,3,<empty>,5]  // create a position at 5 index

allUsers[2] = user2;    // replace 


allUsers[0].name = "Updated From 152"


// remove 
// a. first 
// b. last 
// c. position 


// 
const first = allUsers.shift()

const last = allUsers.pop()

// [0,2,3,4,5]
const index = allUsers.splice(1, 1)


let arr = []
arr[1] = "Value"
// arr [<empty>, "Value"]

let oneIndex = arr.splice(1,1);

arr[0] = "Set another value"
// ["set Another value"]
//arr = []



// size 
console.log(allUsers.length)        // 1


let a; 
a = "value";
a = 123;



let imagesExts = ['jpg','jpeg','png','gif','svg','webp']
// [arry, obj]  => multidimensional 
let ext = "jpg"

console.log(imagesExts.includes(ext))   // boolean 


// map, filter, reduce, forEach
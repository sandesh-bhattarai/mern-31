// es5 
// write file 
// fs , http node => server creation 
// BE API server start , BE Project, Express
const fs = require('fs');

const users = [
    {
        fullName: "Ram Bahadur Thapa",
        email: "ram.thapa@example.com",
        address: "Kathmandu, Nepal",
        phoneNumber: "9801234567"
    },
    {
        fullName: "Sita Devi Sharma",
        email: "sita.sharma@example.com",
        address: "Pokhara, Nepal",
        phoneNumber: "9812345678"
    },
    {
        fullName: "Krishna Prasad Dhakal",
        email: "krishna.dhakal@example.com",
        address: "Biratnagar, Nepal",
        phoneNumber: "9802345678"
    },
    {
        fullName: "Gita Kumari Joshi",
        email: "gita.joshi@example.com",
        address: "Lalitpur, Nepal",
        phoneNumber: "9813456789"
    },
    {
        fullName: "Hari Bahadur Rai",
        email: "hari.rai@example.com",
        address: "Bhaktapur, Nepal",
        phoneNumber: "9803456789"
    },
    {
        fullName: "Radha Devi Khadka",
        email: "radha.khadka@example.com",
        address: "Butwal, Nepal",
        phoneNumber: "9804567890"
    },
    {
        fullName: "Madan Prasad Shrestha",
        email: "madan.shrestha@example.com",
        address: "Dharan, Nepal",
        phoneNumber: "9805678901"
    },
    {
        fullName: "Laxmi Kumari Gurung",
        email: "laxmi.gurung@example.com",
        address: "Chitwan, Nepal",
        phoneNumber: "9816789012"
    },
    {
        fullName: "Ramesh Bahadur Magar",
        email: "ramesh.magar@example.com",
        address: "Hetauda, Nepal",
        phoneNumber: "9817890123"
    },
    {
        fullName: "Saraswati Devi Pandey",
        email: "saraswati.pandey@example.com",
        address: "Nepalgunj, Nepal",
        phoneNumber: "9818901234"
    }
];

const filename= "./users.json";

// shortcut 
const json_str = JSON.stringify(users);

// fs.writeFileSync(filename, json_str)
// console.log("File written successfully.")

// full code 
// fs.open(filename, 'w', (error, fd) => {
//     if(error) {
//         console.log("Error opening file.")
//     } else {
//         // open 
//         fs.write(fd, json_str, (err, bytes)=> {
//             if(err) {
//                 console.log("error writing in file.")
//             } else {
//                 console.log(bytes+"bytes written  in file. ")

//             }
//         })
//         fs.close(fd)
//     }
// })

const data = fs.readFileSync(filename, {encoding: "utf8"});
// fs.open(filename, 'r', (error, fd) => {
//     if(error) {
//         console.log("Error opening file")
//     } else {
//         // open 
//         fs.readFile(filename,{encoding: "utf-8"}, (err, data) => {
//             const userList = JSON.parse(data);
//             console.log(userList)            
//         })
//     }
// })
const userList = JSON.parse(data);
console.log(userList)


const path = "./uploads/images/users"

if(!fs.existsSync(path)) {
    fs.mkdirSync(path, {recursive: true})
}
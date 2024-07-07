const students = [
    {
      "name": "Ramesh Shrestha",
      "email": "ramesh@example.com",
      "address": "Kathmandu, Nepal",
      "phone": "9812345678",
      "marksObt": 340
    },
    {
      "name": "Sita Thapa",
      "email": "sita@example.com",
      "address": "Pokhara, Nepal",
      "phone": "9845678901"
    },
    {
      "name": "Hari Lama",
      "email": "hari@example.com",
      "address": "Biratnagar, Nepal",
      "phone": "9779865432109"
    },
    {
      "name": "Gita Rai",
      "email": "gita@example.com",
      "address": "Dharan, Nepal",
      "phone": "9801234567"
    },
    {
      "name": "Shyam Sharma",
      "email": "shyam@example.com",
      "address": "Butwal, Nepal",
      "phone": "9849876543"
    },
    {
      "name": "Mina Tamang",
      "email": "mina@example.com",
      "address": "Chitwan, Nepal",
      "phone": "9812345670"
    },
    {
      "name": "Bikash Ghimire",
      "email": "bikash@example.com",
      "address": "Nepalgunj, Nepal",
      "phone": "9809876543"
    },
    {
      "name": "Sabin Bhattarai",
      "email": "sabin@example.com",
      "address": "Itahari, Nepal",
      "phone": "9865432109"
    },
    {
      "name": "Anju Karki",
      "email": "anju@example.com",
      "address": "Hetauda, Nepal",
      "phone": "9812345678"
    },
    {
      "name": "Rajesh Shrestha",
      "email": "rajesh@example.com",
      "address": "Bhaktapur, Nepal",
      "phone": "9845678901",
      "marksObt": 300
    }
  ]

// const size = students.length;

// for(let i = 0; i < size; i++) {
//   let std = students[i]

// [0=> value, 1 => value, .....]
// 0, 1, 2. 
// value, value, value

// for(let i in students){
//     const std = students[i];
for(let std of students){
    std.percent = std.marksObt/5;
    // division
    console.log("Studnet Name: ", std.name)
    console.log("Studnet Email: ", std.email)
    console.log("Studnet Address: ", std.address)
    console.log("Studnet Phone: ", std.phone)
    // percent
    // divi
    console.log("") // empty line
        
}

// g
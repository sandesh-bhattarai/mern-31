// logical code block 
// 
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
      "phone": "9845678901",
      "marksObt": 330
    },
    {
      "name": "Hari Lama",
      "email": "hari@example.com",
      "address": "Biratnagar, Nepal",
      "phone": "9779865432109",
      "marksObt": 286
    },
    {
      "name": "Gita Rai",
      "email": "gita@example.com",
      "address": "Dharan, Nepal",
      "phone": "9801234567",
      "marksObt": 420
    },
    {
      "name": "Shyam Sharma",
      "email": "shyam@example.com",
      "address": "Butwal, Nepal",
      "phone": "9849876543",
      "marksObt": 234
    },
    {
      "name": "Mina Tamang",
      "email": "mina@example.com",
      "address": "Chitwan, Nepal",
      "phone": "9812345670",
      "marksObt": 376
    },
    {
      "name": "Bikash Ghimire",
      "email": "bikash@example.com",
      "address": "Nepalgunj, Nepal",
      "phone": "9809876543",
        "marksObt": 323
    },
    {
      "name": "Sabin Bhattarai",
      "email": "sabin@example.com",
      "address": "Itahari, Nepal",
      "phone": "9865432109",
      "marksObt": 354
    },
    {
      "name": "Anju Karki",
      "email": "anju@example.com",
      "address": "Hetauda, Nepal",
      "phone": "9812345678",
      "marksObt": 278
    },
    {
      "name": "Rajesh Shrestha",
      "email": "rajesh@example.com",
      "address": "Bhaktapur, Nepal",
      "phone": "9845678901",
      "marksObt": 300
    }
]

function getPercentage (marksObt) {
    return marksObt/5
}
 
function getDivision (per) {
    if(per >= 80) {
        return "Distinction"
    } else if(per >= 60) {
        return "First Division"
    } else if(per >= 45) {
        return "Second Division"
    } else if(per >= 35) {
        return "Third Division"
    } else {
        return "Sorry! Your are failed."
    }
}

function printStudent(std) {
    console.log("Name: ", std.name)
    console.log("Email: ", std.email)
    console.log("Phone: ", std.phone)
    console.log("Address: ", std.address)
    console.log("Percentage: ", std.percentage)
    console.log("Division: ", std.division)
    console.log("---------------------------")
} 

for(let student of students) {

    const per = getPercentage(student.marksObt)
    student['percentage'] = per;
    // division 
    const division = getDivision(per)
    student['division'] =division;

    // student data pring 
    printStudent(student)
}


// Create a js functionn to calculate household electricity consumpiton amount based on
// following. 
const household = [
    {
        name: "Owner 1",
        consumedUnits: 150
    },
    {
        name: "Owner 2",
        consumedUnits: 25
    },
    {
        name: "Owner 3",
        consumedUnits: 75
    },
    {
        name: "Owner 4",
        consumedUnits: 250
    }
]
// Rates: 
// for the fist 20 units, a lumpsum amount of NPR. 80 has to be paid
// for the next 20 units the rate is Npr. 5/unit
// for the next 30 units, the rate is Npr. 7/unit
// for the next 50 units, the rate is Npr. 10/unit
// for the next 100 units, the rate is Npr. 15/unit
// any units above this, the rate is Npr. 20/unit

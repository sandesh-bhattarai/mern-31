/**
 * Decision making statemtnes 
 *  if-else 
 * else-if 
 * switch-case 
 * Iterations or Loops
 *  do-while 
 * while 
 * for 
 * for-of
 * for-in
 */

let x  = 10;
// x > 10 

// nesting
if(x >= 10){
    // 
    if(x <= 30) {
        // 30 >= x >= 10
        // if 
            // if
    }
} else {
    // optional
}


// 
const day = "Sunday"

if(day === 'Saturday') {
    console.log("Holiday")
} else {
    if(day === 'Friday') {
        console.log("Weekend")
    } else {
        console.log("Weekday")
    }
}

if(day === 'Saturday') {
    console.log("Holiday")
} else if(day === "Friday") {
    console.log("Weekend")
} else {
    console.log("Weekday")
}


// create an object named student 
// assing name, email, marksObt as number to the object
// calculate percentage if totalScore is 500
// print the division based on percentage
// Given, 
// percentage >= 80 => Distinction 
// percentage >=60 but < 80 => First Division
// percentage >=45 but < 60 => Second Division
// percentage >=35 but < 45 => Third Division
// percentage < 35 => Sorry you are failed


const student = {
    name: "Sandesh Bhattarai",
    email: "sandesh@broadwayinfosys.com",
    marksObt: 340
}

student['percentage'] = student.marksObt/5

if(student.percentage >= 80) {
    console.log("Distinction")
} else if(student.percentage >= 60 && student.percentage < 80) {
    console.log("Frirst Division")
} else if(student.percentage >= 45 && student.percentage < 60) {
    console.log("Second Division")
} else if(student.percentage >= 35 && student.percentage < 45) {
    console.log("Third Division")
} else {
    console.log("Sorry! you are failed.")
}


// Task 1
// Calculate total bill to be paid by a house hold if electricity consumed for a month is 350 units
// given 
// for the fist 20 units, a lumpsum amount of NPR. 80 has to be paid
// for the next 20 units the rate is Npr. 5/unit
// for the next 30 units, the rate is Npr. 7/unit
// for the next 50 units, the rate is Npr. 10/unit
// for the next 100 units, the rate is Npr. 15/unit
// any units above this, the rate is Npr. 20/unit

const consumedUnits = 350;
let toBePaid = 0;

if(consumedUnits <= 20) {
    toBePaid =80
} else if(consumedUnits <= 40) {
    toBePaid  = 80 + (consumedUnits - 20) * 5
} else if(consumedUnits <= 70){
    toBePaid = 80 + 20 * 5 + (consumedUnits - 40) * 7
} else if(consumedUnits <= 120) {
    toBePaid = 80 + 20 *5 + 30 * 7 + (consumedUnits- 70) * 10
} else if(consumedUnits <= 220) {
    toBePaid = 80 + 20 *5 + 30 * 7 + 50 * 10 + (consumedUnits - 120) * 15
} else {
    toBePaid = 80 + 20 *5 + 30 * 7 + 50 * 10 + 100 * 15 + (consumedUnits - 220) * 20;
}

console.log("To be paid: Npr. ", toBePaid)

// if(consumedUnits > 220) {
//     toBePaid = 80 + 20 * 5 + 30 * 7 + 50 * 10 + 100 * 15 + (consumedUnits-220) * 20
// }

// task 2 
// Calculate 
// a. Annual salary after Tax 
// b. Monthly Salary after Tax 
// c. Annual Tax to be paid 
// d. Monthly Tax to be paid 
// Consider a ssoftware Developer earns Npr. 5000000 yearly before tax. 
// Given the tax brackets 
// if annual income is less than 500000 => tax = 1% 
// if annual income is 200000 more, => tax = 15%
// if annual income is 300000 more, => tax = 20%
// if annual income is 1000000 more, => tax = 25%
// if annual income is 1500000 more, => tax = 30%
// above any of the mentioned, more => tax = 36%

// 600000
// 500000 * 0.01
// 100000 * 0.15

const salary = 50000000
let taxAnnual = 0;

if(salary <= 500000) {
    taxAnnual =  salary * 0.01
} else if(salary <= 700000) {
    taxAnnual = 500000 * 0.01 + (salary - 500000) * 0.15
} else if(salary <= 1000000) {
    taxAnnual = 500000 * 0.01 + 200000 * 0.15 + (salary - 700000) * 0.20
} else if(salary <=  2000000) {
    taxAnnual = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.20 + (salary - 1000000) * 0.25
} else if(salary <= 3500000) {
    taxAnnual = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.20 + 1000000 * 0.25 + (salary - 2000000) * 0.30
} else  {
    taxAnnual = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.20 + 1000000 * 0.25 + 1500000 * 0.30 + (salary - 3500000) * 0.36
}

console.log("Annual Tax: Npr. ", taxAnnual)
console.log("Annual salary: Npr.", (salary - taxAnnual) )
console.log("Monthly Tax: Npr. ", (taxAnnual/12))
console.log("Monthly Salary: Npr, ", (salary-taxAnnual)/12 )



// 500000 ==> 1% => 5000 yearly tax 
// 5000/12 => monthly tax 
// 500000-5000 => 495000    => yearly salary 


// 5000000
// 500000 => 1%, 4500000
// 200000 => 15%, 4300000
// 300000 => 20%, 4000000
// 1000000 => 25%, 3000000
// 1500000 => 30%, 1500000
// 1500000 => 36%  , 0
// ---------------------------
/// total => total tax to be paid yearly 
// /12 => montly tax
// - totalTax Yearly => yearly salary 
// yearly salary/12 => monthly salary 


// 20 => 80,    units 330
// 20 => 20*5, units 310
// 30 => 7*30, units 280
// 50 => 10* 50, units 230 
// 100 => 15*100, units 130
// 130 => 20*130, unit 0

// 115 units 
// 20 => 80, 95rem
// 20 => 20*5, 75re
// 30 => 30*7, 45rem
// 45 => 45 * 10, rem 0


// 15 units 
// 20< => 80

// 1 unit 
// 809


day = "Sunday"
if(day === "Saturday" || day === 'Sunday') {
    console.log("Holiday")
} else if( day === 'Firday') {
    console.log('Weekend')
} else {
    console.log("Weekday")
}


// switch case 
switch(day) {
    case "Sunday": 
    case "Saturday":
        console.log("Holiday")
        break;
    case "Friday":
        console.log("Weekend")
        break;
    default: 
        // optional
        console.log("Weekday")
        break;  // optional
}
//
// loop iterate 
// dowhile
// while 
// for 
// for-of
// for-in
// .map, .filter, .forEach, .reduce, .some, .each, .every
// a. Data structure 

// employee Data
// name, address, position, joinDate

// object, JSON data 
function Employee(name, address, position, joinDate, salary) {
    this.name = name;
    this.address =address;
    this.position = position;
    this.joinDate = joinDate;
    this.salary = salary;
}


Employee.prototype.calculateSalary = function() {
    this.salary     // undefined
}


const employee = new Employee("Sandesh Bhattarai", "Kathmandu", "MERN Trainer", "2017-01-27", 10000)
// employee.name = "Sandesh";
employee.calculateSalary()


const employee1 = new Employee("Sandesh Bhattarai", "Kathmandu", "MERN Trainer", "2017-01-27", 15000)
// employee1.name = "Another name";

// const list = [
//     employee,
//     employee1,
//     // employee2
// ]

console.log(employee.name)  // Sandesh Bhattarai
console.log(employee1.name) // Sandesh Bhattarai
// const employee = {
//     name: "", 
//     address: "", 
//     position: "", 
//     joinDate: ""
// }

// Class 
    // instance 

// Object
// Class based 
// Prototype based


// Multi-level => 
// A => B => C => D => E
// A <= B <= C <= D <= E

// Parent class
class User {
    // name; 
    // email; 
    // address; 
    constructor(data){
        console.log("I am in User Class")
    }

    getName(){
        console.log("I am in parent")
        return "Name data"
    }
}

// Child, Derived
class Admin extends User {
    // role = "admin";
    // position; 
    // cannot return async 
    // cannot be declared as arrow
    constructor() {
        super("To parent")
        console.log("I am in Admin class")
        this.name; 
    }
    getName(){
        super.getName()
        console.log("I am in derived class")
        return "Name Data another"
    }
}

const admin = new Admin();
console.log(admin.getName())     // Name Data another

// class MailService {
//     constructor(){
//         this.connect()
//     }  
//     connect = () => {
//         // smtp server connect async 
//     }
// }

// const mailsvc = new MailService()


// main 
class BaseController {
    // base define
    getAllData(){

    }
}

class PostController extends BaseController {
    getAllData(){
        super.getAllData()
    }
}

const pstCtrl = new PostController()
pstCtrl.getAllData()

/**
 * a. Create a class called polygon. Assign lenth, width, height as the property of the polygon class.
 * Create another class called Rectange. Assign length and width to polygon via rectangle. 
 * Calculate area of the polygon if length is 2 and width is 3. Formula: length * width
 *  Create another class called Cube inheriting Polygon. Assign 2 for each side in polygon. 
 * Calculate volume of the cube. Formula: length * length * length
 * // All the Polygon, Rectangle anc Cube are classes. Use inheritance with constructor and overriding
 * 
 * b. Create a class called Calculator. Assign two numbers data getting from constructor. 
 * create functions to calculate, sum, difference, multiplication and division for those two numbers. 
 * By calling each function of the class, the value should be shown. 
 */
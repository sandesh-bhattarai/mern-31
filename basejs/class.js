class Employee{
    // property
        // data, functions
    #email;
    name;
    _address;
    position;

    constructor( _email, _address, _position,_name) {
        console.log("I am always called")
        this.name = _name; 
        this.#email = _email
        this._address = _address
        this.position   = _position
    }
    
    // Employee() {

    // }

    getEmail() {
        return this.#email
    }
    // setName(_name) {
    //     // 
    //     this.name = _name
    // }

    // getName = () => {
    //     return this.name
    // }
}

const employeeOb = new Employee("sandesh@broadwayinfosys.com", "Kathmandu", "Trainer","Sandesh Bhattarai")

// employeeOb.name  = "Sandesh Bhattarai"
// employeeOb.setName("Sandesh Bhattarai")
console.log(employeeOb)
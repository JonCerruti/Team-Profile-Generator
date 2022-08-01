const Employee = require("./employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber
    }
    employeeRole(){
        return "Manager";
    }
    officeNum(){
        return this.officeNumber
    }
}

module.exports = Manager;
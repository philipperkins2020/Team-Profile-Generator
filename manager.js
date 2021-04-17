const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, email, github, id, officenumber) {

        super(name, email, github, id, officenumber);
    }
}
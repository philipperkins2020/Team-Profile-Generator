const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, email, github, id, officenumber) {

        super(name, email, github, id, officenumber);
    }
}
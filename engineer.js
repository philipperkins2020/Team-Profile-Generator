const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email, github, id, officenumber) {

        super(name, email, github, id, officenumber);
    }
}
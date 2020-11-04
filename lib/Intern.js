// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Intern {
    constructor(name, id, email, school) {
        
        // refine code using super() keyword that provides a reference to a parent class
        super(name, id, email);
        this.school = school;
    }
    getName()
    getId()
    getEmail()
    getSchool()
    
    getRole() {
        return "Intern"
    }
    someOtherMethod() {

    }
}

module.exports = Intern;
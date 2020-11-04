// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer {
    constructor(name, id, email, github) {
        
        // refine code using super() keyword that provides a reference to a parent class
        super(name, id, email);
        this.github = github;
    }
    getName()
    getId()
    getEmail()
    getGithub()

    getRole() {
        return "Engineer"
    }
    someOtherMethod() {

    }
}

module.exports = Engineer;
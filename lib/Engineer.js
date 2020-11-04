// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer {
    constructor(name, id, email, github) {

        // refine code using super() keyword that provides a reference to a parent class
        // super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    
    // getName() {
    //     return this.name;
    // }
    // getId() {
    //     return this.id;
    // }
    // getEmail() {
    //     return this.email;
    // }
    };
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
}


module.exports = Engineer;
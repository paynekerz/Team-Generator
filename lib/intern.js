const employee = require("./employee.js");

class intern extends employee {
    constructor(name, email, id, school) {
        //calls parent "employee" to get name email and id
        super(name, email, id);
        this.school = school;
    }
    getSpecial() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = intern;
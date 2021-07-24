const employee = require("./employee.js");

class manager extends employee {
    constructor(name, email, id, officeNumber) {
        //calls parent "employee" to get name email and id
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    getSpecial() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = manager;
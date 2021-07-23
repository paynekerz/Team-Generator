const employee = require("./employee");

class intern extends employee {
    constructor(name, email, id, github) {
        //calls parent "employee" to get name email and id
        super(name, email, id);
        this.github = github;
    }
    getSpecial() {
        return this.github;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = intern;
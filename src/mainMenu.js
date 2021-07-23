mainMenu = [
    {
        type: "input",
        message: "Please input the team members name.",
        name: "name",
    },
    {
        type: "list",
        message: "What is this members role?",
        name: "role",
        choices: ["ENGINEER", "INTERN", "MANAGER"],
    },
    {
        type: "input",
        message: "What is this memebers ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the members email address?",
        name: "email",
    }
]

module.exports = mainMenu;
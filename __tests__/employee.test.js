
const employee = require("../lib/employee.js") 

describe("employee", () => {
    it("checks the employees name", () => {
        const newEmployee = new employee("Lorem Ipsum", 1234, "lorem@ipsum.com")
        expect(newEmployee.name).toBe("Lorem Ipsum") 
    })
    it("checks the employees id", () => {
        const newEmployee = new employee("Lorem Ipsum", 1234, "lorem@ipsum.com")
        expect(newEmployee.id).toBe(1234) 
    })
    it("checks the employees email", () => {
        const newEmployee = new employee("Lorem Ipsum", 1234, "lorem@ipsum.com")
        expect(newEmployee.email).toBe("lorem@ipsum.com") 
    })
})
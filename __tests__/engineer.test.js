const engineer = require("../lib/engineer.js")

describe("employee", () => {
    it("checks the engineers name", () => {
        const newEngineer = new engineer("Lorem Ipsum", 1234, "lorem@ipsum.com", "loremIpsum")
        expect(newEngineer.name).toBe("Lorem Ipsum") 
    })
    it("checks the engineers id", () => {
        const newEngineer = new engineer("Lorem Ipsum", 1234, "lorem@ipsum.com", "loremIpsum")
        expect(newEngineer.id).toBe(1234) 
    })
    it("checks the engineers email", () => {
        const newEngineer = new engineer("Lorem Ipsum", 1234, "lorem@ipsum.com", "loremIpsum")
        expect(newEngineer.email).toBe("lorem@ipsum.com") 
    })
    it("checks the engineers username", () => {
        const newEngineer = new engineer("Lorem Ipsum", 1234, "lorem@ipsum.com", "loremIpsum")
        expect(newEngineer.github).toBe("loremIpsum") 
    })
})
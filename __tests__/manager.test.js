const manager = require("../lib/manager.js")

describe("manager", () => {
    it("checks the managers name", () => {
        const newManager = new manager("Lorem Ipsum", 1234, "lorem@ipsum.com", 4321)
        expect(newManager.name).toBe("Lorem Ipsum") 
    })
    it("checks the managers id", () => {
        const newManager = new manager("Lorem Ipsum", 1234, "lorem@ipsum.com", 4321)
        expect(newManager.id).toBe(1234) 
    })
    it("checks the managers email", () => {
        const newManager = new manager("Lorem Ipsum", 1234, "lorem@ipsum.com", 4321)
        expect(newManager.email).toBe("lorem@ipsum.com") 
    })
    it("checks the managers username", () => {
        const newManager = new manager("Lorem Ipsum", 1234, "lorem@ipsum.com", 4321)
        expect(newManager.office).toBe(4321) 
    })
})
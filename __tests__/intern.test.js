const intern = require("../lib/intern.js")

describe("intern", () => {
    it("checks the interns name", () => {
        const newIntern = new intern("Lorem Ipsum", 1234, "lorem@ipsum.com", "Hard Knocks")
        expect(newIntern.name).toBe("Lorem Ipsum") 
    })
    it("checks the interns id", () => {
        const newIntern = new intern("Lorem Ipsum", 1234, "lorem@ipsum.com", "Hard Knocks")
        expect(newIntern.id).toBe(1234) 
    })
    it("checks the interns email", () => {
        const newIntern = new intern("Lorem Ipsum", 1234, "lorem@ipsum.com", "Hard Knocks")
        expect(newIntern.email).toBe("lorem@ipsum.com") 
    })
    it("checks the interns username", () => {
        const newIntern = new intern("Lorem Ipsum", 1234, "lorem@ipsum.com", "Hard Knocks")
        expect(newIntern.school).toBe("Hard Knocks") 
    })
})
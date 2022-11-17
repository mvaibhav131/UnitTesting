const multiply=require("./multiply");
const {test,expect,describe}=require("@jest/globals");

describe("Testing the multiply function  works with number",()=>{
    test("It should work on positive numbers",()=>{
        expect(multiply(5,6)).toBe(30);
    });
})
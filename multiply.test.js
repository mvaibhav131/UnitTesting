const multiply=require("./multiply");
const {test,expect,describe}=require("@jest/globals"); //not need tobe import but it gives you the auto suggestion

describe("Testing the multiply function  works with number",()=>{
    test("It should work on positive numbers",()=>{
        expect(multiply(5,6)).toBe(30);
    });
})
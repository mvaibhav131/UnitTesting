
const sum =require("./index");
const {test, expect,describe}= require("@jest/globals"); //not need tobe import but it gives you the auto suggestion


describe("Testing the sum function with number",()=>{
    test("It shoult works on Positive Number",()=>{
        //Accersion
        //left side is what you are expecting and right side is shows required result. 
        expect(sum(2,2)).toBe(4);
        expect(sum(0,0)).toBe(0);
        expect(sum(100,0)).toBe(100);
        });
        
        test("It should works on Negative Numbers",()=>{
          expect(sum(-2,-4)).toBe(-6);
          expect(sum(-2,0)).toBe(-2);
        });
});

describe("Testing the sum function with characters",()=>{
    test("It should not works with alphabet",()=>{
        expect(sum("a","b")).toBeUndefined();
    });
});


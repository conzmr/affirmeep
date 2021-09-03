
var expect = require("chai").expect;
var {getGreeting} = require("../app");

describe("Get Greeting", function() {
    it("should return Hello World greeting", function() {
        const greeting = getGreeting();
        expect(greeting).to.equal("Hello World");
    });
});
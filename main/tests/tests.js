/* eslint-disable */
<<<<<<< HEAD
describe("A suite", function() {
    it("contains spec with an expectation of true", function() {
=======
describe("Test suite", function() {
    it("This function must return true", function() {
>>>>>>> 7b687310664e68597125b2ed8c33ea5e60bbcc71
        expect(returnTrue()).toBe(true);
    });
    it("This function must return false", function() {
        expect(returnFalse()).toBe(false);
    });
<<<<<<< HEAD
    it("test expected to pass", function() {
        expect(isToolAvailable()).toBe(true);
    });
    it("test expected to pass", function() {
=======
    it("This tool must be available", function() {
        expect(isToolAvailable()).toBe(true);
    });
    it("This function must return false", function() {
>>>>>>> 7b687310664e68597125b2ed8c33ea5e60bbcc71
        expect(notCovered()).toBe(false);
    });
});
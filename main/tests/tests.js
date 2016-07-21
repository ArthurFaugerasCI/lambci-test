describe("Test suite", function() {
    it("This function must return true", function() {
        expect(returnTrue()).toBe(true);
    });
    it("This function must return false", function() {
        expect(returnFalse()).toBe(false);
    });
    it("This tool must be available", function() {
        expect(isToolAvailable()).toBe(false);
    });
    // it("This function must return false", function() {
    //     expect(notCovered()).toBe(false);
    // });
});
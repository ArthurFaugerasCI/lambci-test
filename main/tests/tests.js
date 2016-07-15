describe("A suite", function() {
    it("contains spec with an expectation of true", function() {
        expect(returnTrue()).toBe(true);
    });
    it("test expected to fail returnFalse returns true", function() {
        expect(returnFalse()).toBe(false);
    });
    it("test expected to pass", function() {
        expect(isToolAvailable()).toBe(true);
    });
    it("test expected to pass", function() {
        expect(notCovered()).toBe(false);
    });
});
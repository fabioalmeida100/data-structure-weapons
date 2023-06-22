import bynary_search from "../../search_algorithms/typescript/bynary_search";

/*
    Remember: for use bynary search, the array must be sorted!!! Don't forget it!
*/
describe("Bynary Search", () => {
    it("should find the index of an element in an array of numbers", () => {
        const array = [1, 2, 3, 4, 5];
        const index = bynary_search(array, 3);

        expect(index).toBe(2);
    });

    it("should return -1 if the element is not found in the array", () => {
        const array = [1, 2, 3, 4, 5];
        const index = bynary_search(array, 6);

        expect(index).toBe(-1);
    });
});

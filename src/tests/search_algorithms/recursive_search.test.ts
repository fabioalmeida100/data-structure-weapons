import recursiveSearch from "../../search_algorithms/recursive_search";

describe("Recursive Search", () => {
    it("should find the index of an element in an array of numbers", () => {
        const array = [1, 15, 3, 4, 5, 2];
        const index = recursiveSearch(array, 3);

        expect(index).toBe(2);
    });

    it("should return -1 if the element is not found in the array", () => {
        const array = [1, 15, 3, 4, 5, 2];
        const index = recursiveSearch(array, 6);

        expect(index).toBe(-1);
    });
});

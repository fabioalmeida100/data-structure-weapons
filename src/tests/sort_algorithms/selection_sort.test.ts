import selectionSort from "../../sort_algorithms/selection_sort";

describe("Selection Sort", () => {
    it("should sort an array of numbers in ascending order", () => {
        const array = [1, 5, 3, 2, 4];
        const sortedArr = selectionSort(array, true);

        expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
    });

    it("should sort an array of numbers in descending order", () => {
        const array = [1, 5, 3, 2, 4];
        const sortedArr = selectionSort(array, false);

        expect(sortedArr).toEqual([5, 4, 3, 2, 1]);
    });
});

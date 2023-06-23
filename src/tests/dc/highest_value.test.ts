import highestValue from "../../dc/highest_value";

describe("Highest value of an array using divide and conquer", () => {
    it("should return 0 for empty array", () => {
        const array: number[] = [];
        const result = highestValue(array);
        expect(result).toBe(0);
    });

    it("should return 1 for array with one element", () => {
        const array: number[] = [1];
        const result = highestValue(array);
        expect(result).toBe(1);
    });

    it("should return 85 for array with ten elements", () => {
        const array: number[] = [1, 2, 3, 4, 5, 85, 6, 7, 8, 9, 6];
        const result = highestValue(array);
        expect(result).toBe(85);
    });

    it("should return 178 for array with ten elements", () => {
        const array: number[] = [1, 2, 3, 4, 5, 178, 85, 6, 7, 8, 9];
        const result = highestValue(array);
        expect(result).toBe(178);
    });
});

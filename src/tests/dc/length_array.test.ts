import lengthArrayDC from "../../dc/length_array_dc";

describe("Length of an array using divide and conquer", () => {
    it("should return 0 for empty array", () => {
        const array: number[] = [];
        const result = lengthArrayDC(array);
        expect(result).toBe(0);
    });

    it("should return 1 for array with one element", () => {
        const array: number[] = [1];
        const result = lengthArrayDC(array);
        expect(result).toBe(1);
    });

    it("should return 11 for array with ten elements", () => {
        const array: number[] = [1, 2, 3, 4, 5, 85, 6, 7, 8, 9, 6];
        const result = lengthArrayDC(array);
        expect(result).toBe(11);
    });
});

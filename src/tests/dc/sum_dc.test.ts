import sumWithDevideConquerApproach from "../../dc/sum_dc";

describe("Sum of array elements using divide and conquer", () => {

    it("should return 0 for empty array", () => {
        const array: number[] = [];
        const result = sumWithDevideConquerApproach(array);
        expect(result).toBe(0);
    });

    it("should return 1 for array with one element", () => {
        const array: number[] = [1];
        const result = sumWithDevideConquerApproach(array);
        expect(result).toBe(1);
    });

    it("should return 3 for array with two elements", () => {
        const array: number[] = [1, 2];
        const result = sumWithDevideConquerApproach(array);
        expect(result).toBe(3);
    });

    it("should return 221 with various elements", () => {
        const array: number[] = [1, 8, 3, 4, 5, 85, 6, 7, 8, 9, 10, 36, 12, 13, 14];
        const result = sumWithDevideConquerApproach(array);
        expect(result).toBe(221);
    });

});

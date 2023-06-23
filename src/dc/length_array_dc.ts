/*
    Length of an array using divide and conquer.
    Base case: if array is empty, return 0
    Recursive case: return 1 + length of array without first element
*/

export default function lengthArrayDC(arr: number[]): number {
 
    if (arr.length === 0) {
        return 0
    }

    return 1 + lengthArrayDC(arr.slice(1))
}


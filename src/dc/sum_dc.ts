/*
    Sum of array elements using divide and conquer
    
    Base case: array.length === 0
    Recursive case: array[0] + sumDevideConquer(array.slice(1))
*/

export default function sumWithDevideConquerApproach(array: number[]): number {
    if (array.length === 0) 
        return 0
    else
        return array[0] + sumWithDevideConquerApproach(array.slice(1))
}



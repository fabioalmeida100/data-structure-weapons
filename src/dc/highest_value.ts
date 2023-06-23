/*
    Find the highest value in an array of numbers using divide and conquer.
    Base case: if array is empty, return 0
    Recursive case: return the highest value between the first element and the highest value of the array without the first element
*/

export default function highestValue(arr: number[]): number {
    if (arr.length === 0) 
        return 0
    else if (arr.length === 1)
        return arr[0]
    else if (arr[0] > highestValue(arr.slice(1)))
        return arr[0]
    else
        return highestValue(arr.slice(1))
}





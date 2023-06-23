export default function recursiveSearch(array: number[], value: number, index: number = 0): number {
    if (index >= array.length) {
        return -1;
    } else if (array[index] === value) {
        return index;
    } else
        return recursiveSearch(array, value, index + 1);
}

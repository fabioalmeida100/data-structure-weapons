export default function recursiveSearch<T>(array: number[], value: number, index: number = 0): number {
    if (array[index] === value) {
        return index;
    } else
        return recursiveSearch(array, value, index + 1);
}

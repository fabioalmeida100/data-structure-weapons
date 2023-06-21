export default function bubbleSort(arr: number[], asc: boolean): number[] {
    let arrLength = arr.length;
    let lowestElement = 0;

    for (let i = 0; i < arrLength; i++) {
        for (let j = i; j < arrLength; j++) {
            if ((asc && arr[i] > arr[j]) || (!asc && arr[i] < arr[j])) {
                lowestElement = arr[i];
                arr[i] = arr[j];
                arr[j] = lowestElement;
            }
        }
    }

    return arr;
}

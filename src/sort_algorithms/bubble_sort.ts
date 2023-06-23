export default function bubbleSort(arr: number[], asc: boolean): number[] {
    let arrLength = arr.length;
    let swapElement = 0;

    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {
            if ((asc && arr[i] > arr[j]) || (!asc && arr[i] < arr[j])) {
                swapElement = arr[i];
                arr[i] = arr[j];
                arr[j] = swapElement;
            }
        }
    }

    return arr;
}

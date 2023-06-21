export default function selectionSort(arr: number[], asc: boolean): number[] {
    let newArray: number[] = [];
    let arrLength = arr.length;
    let lowestElementIndex = 0;

    for (let i = 0; i < arrLength; i++) {
        lowestElementIndex = searchLowestOrBiggestElement(arr, asc);
        newArray.push(arr[lowestElementIndex]);
        arr.splice(lowestElementIndex, 1);
    }

    return newArray;
}   

const searchLowestOrBiggestElement = (arr: number[], lowestElement: boolean): number => {
    let lowestElementItem = arr[0];
    let lowestIndex = 0;
    let currentElementItem = 0;

    for (let i = 0; i < arr.length; i++) {
        currentElementItem = arr[i];

        if ((lowestElement && currentElementItem < lowestElementItem) ||
            (!lowestElement && currentElementItem > lowestElementItem)) {
            lowestElementItem = currentElementItem;
            lowestIndex = i;
        }
    }
    return lowestIndex;
}


export default function bynarySearch(listItens: number[], item: number): number {
    let low = 0;
    let high = listItens.length - 1;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (listItens[mid] === item)
            return mid;
        
        if (listItens[mid] < item)
            low = mid + 1;
        
        if (listItens[mid] > item)
            high = mid - 1;
    }

    return -1;
}

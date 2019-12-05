import { bubbleSort, modifiedBubbleSort, selectionSort, insertionSort, mergeSort, quickSort, heapSort, sequentialSearch, binarySearch, shellSort } from "../algorithms/sort.js";

function testSort() {

    let arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    bubbleSort(arr);
    console.log(...arr);

    arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    modifiedBubbleSort(arr);
    console.log(...arr);

    arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    selectionSort(arr);
    console.log(...arr);

    arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    insertionSort(arr);
    console.log(...arr);

    arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    arr = mergeSort(arr);
    console.log(...arr);

    arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    quickSort(arr);
    console.log(...arr);

    arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    heapSort(arr);
    console.log(...arr);

    arr = [0, 2, 4, 51, 2, 10, 45, 1, 15, 43, 22];
    shellSort(arr, [3, 2, 1]);
    console.log(...arr);

    console.log(sequentialSearch(arr, 10));

    console.log(binarySearch(arr, 10));

}

export { testSort }
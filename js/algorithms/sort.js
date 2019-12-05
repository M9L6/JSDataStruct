/**
 * 交换数组两个元素的位置
 * @param {*} arr 
 * @param {*} i1 
 * @param {*} i2 
 */
function swap(arr, i1, i2) {
    let tmp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = tmp;
}

/**
 * 冒泡排序
 * @param {*} arr 
 */
function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

/**
 * 改进的冒泡排序
 * @param {*} arr 
 */
function modifiedBubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

/**
 * 选择排序
 * @param {*} arr 
 */
function selectionSort(arr) {
    let length = arr.length,
        indexMin;
    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            swap(arr, i, indexMin);
        }
    }
}

/**
 * 插入排序
 * @param {*} arr 
 */
function insertionSort(arr) {
    let length = arr.length,
        j, tmp;
    for (let i = 1; i < length; i++) {
        j = i;
        tmp = arr[i];
        while (j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = tmp;
    }
}

/**
 * 归并排序
 * @param {*} arr 
 */
function mergeSort(arr) {
    return mergeSortRec(arr);
}

/**
 * 归并递归函数
 * @param {*} arr 
 */
function mergeSortRec(arr) {
    let length = arr.length;
    if (length === 1) {
        return arr;
    }
    let mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
}

/**
 * 合并左右两块数组
 * @param {*} left 
 * @param {*} right 
 */
function merge(left, right) {
    let result = [],
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    while (il < left.length) {
        result.push(left[il++]);
    }

    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
}

/**
 * 划分过程
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

/**
 * quick递归函数
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function quick(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
    }
    if (left < index - 1) {
        quick(arr, left, index - 1);
    }

    if (index < right) {
        quick(arr, index, right);
    }
}

/**
 * 快速排序
 * @param {*} arr 
 */
function quickSort(arr) {
    quick(arr, 0, arr.length - 1);
}

/**
 * 重新构造堆
 * @param {*} arr 
 * @param {*} heapSize 
 * @param {*} i 
 */
function heapify(arr, heapSize, i) {
    let left = i * 2 + 1,
        right = i * 2 + 2,
        largest = i;
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, heapSize, largest);
    }
}

/**
 * 构造堆
 * @param {*} arr 
 */
function buildHeap(arr) {
    let heapSize = arr.length;
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        heapify(arr, heapSize, i);
    }
}

/**
 * 堆排序
 * @param {*} arr 
 */
function heapSort(arr) {
    let heapSize = arr.length;
    buildHeap(arr);
    while (heapSize > 1) {
        heapSize--;
        swap(arr, 0, heapSize);
        heapify(arr, heapSize, 0);

    }
}

/**
 * 希尔排序
 * @param {*} arr  
 * @param {*} gaps 间隔数组 
 */
function shellSort(arr, gaps = [1]) {
    let i, j, k;
    for (i = 0; i < gaps.length; i++) {
        for (j = gaps[i]; j < arr.length; j++) {
            let tmp = arr[j];
            for (k = j; k >= gaps[i] && arr[k - gaps[i]] > tmp; k -= gaps[i]) {
                arr[k] = arr[k - gaps[i]];
            }
            arr[k] = tmp;
        }
    }
}


/**
 * 顺序搜索
 * @param {*} arr 要查找的内容 
 * @param {*} item 要查找的元素
 */
function sequentialSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }
    return -1;
}

/**
 * 二分搜索
 * @param {*} arr 要搜索的主体 
 * @param {*} item 要搜索的元素
 */
function binarySearch(arr, item) {
    quickSort(arr);
    let low = 0,
        high = arr.length - 1,
        mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = arr[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

export { bubbleSort, modifiedBubbleSort, selectionSort, insertionSort, mergeSort, quickSort, heapSort, shellSort, sequentialSearch, binarySearch }
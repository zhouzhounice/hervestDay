// 快速排序 不需要很多额外的空间，所以是原地排序算法
// 快速排序 每次交换的元素都i有可能不是相邻的 所以不稳定
// 快速排序算法 最好情况时间复杂度为O(nlogn) 最坏情况为O(n^2) 平均为 O(nlogn)
const quickSort1 = arr => {
    if (arr.length <= 1) {
        return arr;
    }
    //取基准点
    const midIndex = Math.floor(arr.length / 2);
    //取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
    const valArr = arr.splice(midIndex, 1);
    const midIndexVal = valArr[0];
    const left = []; //存放比基准点小的数组
    const right = []; //存放比基准点大的数组
    //遍历数组，进行判断分配
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midIndexVal) {
            left.push(arr[i]); //比基准点小的放在左边数组
        } else {
            right.push(arr[i]); //比基准点大的放在右边数组
        }
    }
    //递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
    return quickSort1(left).concat(midIndexVal, quickSort1(right));
};

// 快速排序
const quickSort = (arr, left, right) => {
    let len = arr.length,
        partitionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
};

const partition = (arr, left, right) => {
    //分区操作
    let pivot = left, //设定基准值（pivot）
        index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};


const arr = [23,56,32,45,1,40,51,9,19,28,90]
console.log(quickSort1(arr))

const newArr = quickSort(arr);
console.log( newArr);
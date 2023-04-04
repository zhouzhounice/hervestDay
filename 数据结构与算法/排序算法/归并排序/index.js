// 归并排序空间复杂度为O(n) 不是原地排序算法
// 归并排序 相同数值位置不会发生变化 所以是稳定排序算法
// 归并排序时间 最好情况、最坏情况和平均情况的时间复制度都为O(nlogn)
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// 示例用法
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // 输出 [3, 9, 10, 27, 38, 43, 82]

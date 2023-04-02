// 选择排序
// 空间复杂度为O(1)是原地排序算法
// 由于每次都要找剩余没有排序元素中的最小值，并且和前面的元素交换位置，所以会破坏稳定性，是不稳定的排序算法
// 最好、最坏、平均时间复杂度为O(n^2)
const selectionSort = arr =>{
    const len =arr.length;
    let minIndex,temp;
    for (let i =0;i<len-1;i++){
        minIndex = i
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

const arr = [5, 3, 8, 4, 2];
const result = selectionSort(arr) // [2, 3, 4, 5, 8]
console.log(result)
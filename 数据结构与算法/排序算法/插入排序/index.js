// 直接插入排序
// 时间 复杂度最好与最坏都为O(n^2)

const insertionSort = arr =>{
    const len = arr.length;
    if(len<=1) return
    let preIndex,current;
    for(let i=1;i<len;i++){
        preIndex = i -1;
        current = arr[i]
        while (preIndex>=0&&arr[preIndex]>current){
            // 前置条件之一：待比较元素比当前元素大
            arr[preIndex+1] = arr[preIndex]
            preIndex--;
        }
        if(preIndex+1!=i){
            arr[preIndex+1] = current;
            console.log(arr)
        }
    }
    return arr
}

// 测试
const array = [5, 4, 3, 2, 1];
console.log("原始 array :", array);

insertionSort(array);
// 原始 array:  [5, 4, 3, 2, 1]
// array:  	 [4, 5, 3, 2, 1]
// array: 	 [3, 4, 5, 2, 1]
// array: 	 [2, 3, 4, 5, 1]
// array:    [1, 2, 3, 4, 5]


//
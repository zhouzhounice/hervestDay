// 希尔排序 只需要常量级的空间 所以是原地排序算法
// 希尔排序 单次插入是稳定的 不会改变相同元素之间的相对顺序 但是在多次不同插入排序过程中，可能导致相同元素位置发生变化 所以是不稳定的排序算法
// 希尔排序 最好时间复杂度为O(nlogn) 最差情况为O(nlog^2n) 平均情况O(nlog^2n)

const shellSort = arr =>{
    let len = arr.length;
    let temp;
    let gap =1;
    console.time('希尔排序')
    while (gap<len/3){
        gap = gap*3 +1
    }
    for (gap;gap>0;gap = Math.floor(gap/3)){
        for (let i = gap;i<len;i++){
            temp = arr[i];
            let j = i - gap;
            for (;j>=0&&arr[j]>temp;j-=gap){
                arr[j+gap] =arr[j]
            }
            arr[j+gap] = temp
            console.log(arr)
        }
    }
    console.timeEnd('希尔排序');
    return arr;
}

const array = [35, 33, 42, 10, 14, 19, 27, 44];
console.log('原始array:', array);
const newArr = shellSort(array);
console.log('newArr:', newArr);

// 冒泡排序是原地排序 空间复杂度为O(1)
// 冒泡排序是稳定排序算法
// 冒泡排序时间复杂度：当数据基本有序时，最好情况为O(n) 当数据是反序时，最差情况为0(n^2) 平均时间复杂度为O(n^2)
const bubbleSort = arr => {
	console.time('改进前冒泡排序耗时');
	const length = arr.length;
	if(length<=1) return;
	for(let i=0;i<length-1;i++){
		for (let j=0;j<length-i-1;j++){
			if(arr[j]>arr[j+1]){
				const temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}
	console.log(arr)
	console.timeEnd('改进前冒泡排序耗时');
}

const bubbleSortPlus = arr =>{
	console.time('改进后冒泡排序耗时');
	const length = arr.length;
	if(length<=1) return;
	for (let i=0;i<length-1;i++){
		let flag = false
		for (let j=0;j<length-i-1;j++){
			if(arr[j]>arr[j+1]){
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				flag = true
			}
		}
		if(!flag) break;
	}
	console.log(arr)
	console.timeEnd('改进后冒泡排序耗时');
}

// 测试
const arr = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort(arr);
bubbleSortPlus(arr)


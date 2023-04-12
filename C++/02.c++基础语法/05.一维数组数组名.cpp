#include<iostream>
using namespace std;

int main_05() {
	//int arr[] = { 1,20,30,40,50 };
	//cout << sizeof(arr[0]) << endl;
	//cout << (int)arr << endl;
	//cout << (int) & arr[0] << endl;

	// 案例一 打印5只小猪种最重的一只
	//int arr[5] = { 300,350,200,400,250 };
	//int temp = 0;
	//for (int i = 0; i < 5; i++) {
	//	if (arr[i] > temp) {
	//		temp = arr[i];
	//	}
	//}
	//cout << temp << endl;

	// 案例二 反转数组
	int arr[5] = { 1,3,2,5,4 };
	int start = 0; // 记录头下标
	int end = sizeof(arr) / sizeof(arr[0]) -1; // 记录尾下标

	while (start < end) {
		int temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end --;
	}
	for (int i = 0; i < 5; i++) {
		cout << arr[i] << endl;
	}
	
	system("pause");
	return 0;
}
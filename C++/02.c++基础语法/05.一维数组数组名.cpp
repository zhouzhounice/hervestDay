#include<iostream>
using namespace std;

int main_05() {
	//int arr[] = { 1,20,30,40,50 };
	//cout << sizeof(arr[0]) << endl;
	//cout << (int)arr << endl;
	//cout << (int) & arr[0] << endl;

	// ����һ ��ӡ5ֻС�������ص�һֻ
	//int arr[5] = { 300,350,200,400,250 };
	//int temp = 0;
	//for (int i = 0; i < 5; i++) {
	//	if (arr[i] > temp) {
	//		temp = arr[i];
	//	}
	//}
	//cout << temp << endl;

	// ������ ��ת����
	int arr[5] = { 1,3,2,5,4 };
	int start = 0; // ��¼ͷ�±�
	int end = sizeof(arr) / sizeof(arr[0]) -1; // ��¼β�±�

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
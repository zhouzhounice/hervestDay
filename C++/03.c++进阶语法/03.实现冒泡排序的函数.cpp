#include<iostream>
using namespace std;

// 创建函数
void x(int *arr,int len)
{
	for (int i = 0; i < len-1; i++) {
		for (int j = 0; j < len - i - 1;j++) {
			if (arr[j] >arr[j+1]) {
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		
	}
}

int main() {
	// 创建数组
	int arr[10] = { 4,3,6,9,1,2,10,8,7,5 };
	int leng = sizeof(arr) / sizeof(arr[0]);

	x(arr, leng);

	for (int i = 0; i < leng; i++) {
		cout << arr[i] << endl;
	}

	system("pause");
	return 0;
}
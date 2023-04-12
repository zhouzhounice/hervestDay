#include<iostream>
using namespace std;

int main() {
	// 定义二维数组
	int arr[2][3] =
	{
		{1,2,3},
		{4,5,6}
	};
	// 打印二维数组
	for (int i = 0; i < 2; i++) {
		for (int j = 0; j < 3; j++) {
			cout << arr[i][j] << endl;
		}
	}
	system("pause");
	return 0;
} 
#include<iostream>
using namespace std;

int main() {
	// 定义二维数组
	//int arr[2][3] =
	//{
	//	{1,2,3},
	//	{4,5,6}
	//};
	// 打印二维数组
	//for (int i = 0; i < 2; i++) {
	//	for (int j = 0; j < 3; j++) {
	//		cout << arr[i][j] << endl;
	//	}
	//}

	// 计算张三、李四、王五的总成绩
	int scores[3][3] = {
		{100,100,100},
		{90,50,100},
		{60,70,80}
	};
	string names[3] = { "张三","李四","王五" };

	for (int i = 0; i < 3; i++) {
		int sum = 0;
		for (int j = 0; j < 3; j++) {
			sum += scores[i][j];
		}
		cout << names[i]<<"的成绩为：" << sum << " ";
		cout << endl;
	}
	system("pause");
	return 0;
} 
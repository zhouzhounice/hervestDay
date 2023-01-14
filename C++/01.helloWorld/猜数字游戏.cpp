#include <iostream>
using namespace std;
 #include <ctime>

int main()
{
	// 生成随机数
	 srand((unsigned int)time(NULL));
	int randNum = rand() % 100 + 1;
	cout << randNum << endl;
	// 定义用户输入的数字
	cout << "请输入一个随机数" << endl;
	int val = 0;
	// 判断随机数是否与用户输入的数字相等
	while (1) {
		cin >> val;

		if (randNum > val) {
			cout << "输入的数字小了" << endl;
		}
		else if (randNum < val) {
			cout << "输入的数字大了" << endl;
		}
		else
		{
			cout << "你猜对了" << endl;
			break;
		}

	}

	
	system("pause");
	return 0;
}
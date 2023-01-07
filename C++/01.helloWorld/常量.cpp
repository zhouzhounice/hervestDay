#include <iostream>
using namespace std;

// 宏常量
#define Day 7

int main3()
{
	cout << "一周总共有" << Day << "天" << endl;

	// const 修饰的变量也为常量
	const int MONTH = 12;
	cout << "一年总共有" << MONTH << "个月" << endl;
	system("pause");
	return 0;
}

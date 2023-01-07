#include <iostream>
using namespace std;
#include <string> // 用c++风格字符串时候，要包含这个头文件

int main6()
{
	// c语言风格字符串
	char str[] = "hello world";
	cout << str << endl;
	// c++风格字符串
	string str2 = "hello world";
	cout << str2 << endl;
	system("pause");
	return 0;
}
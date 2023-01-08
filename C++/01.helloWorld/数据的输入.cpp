#include <iostream>
using namespace std;
#include <string>

int main8()
{

	// 1.整型输入
	int a = 0;
	cout << "请输入整型变量" << endl;
	cin >> a;
	cout << a << endl;
	
	// 2.浮点数输入
	double b = 0;
	cout << "请输入浮点型变量" << endl;
	cin >> b;
	cout << b << endl;

	// 3.字符型输入
	char c = 'a';
	cout << "请输入字符型变量" << endl;
	cin >> c;
	cout << c << endl;

	// 2.字符串型输入
	string d = "abcd";
	cout << "请输入字符串型变量" << endl;
	cin >> d;
	cout << d << endl;

	system("pause");
	return 0;
}
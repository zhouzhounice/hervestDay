#include <iostream>
using namespace std;

// 宏常量
#define Day 7

int main5()
{
	cout << "short 类型所占内存空间为：" << sizeof(short) << endl;
	cout << "int 类型所占内存空间为：" << sizeof(int) << endl;
	cout << "long 类型所占内存空间为：" << sizeof(long) << endl;
	cout << "long long 类型所占内存空间为：" << sizeof(long long) << endl;

	cout << "float 类型所占内存空间为：" << sizeof(float) << endl;
	cout << "double 类型所占内存空间为：" << sizeof(double) << endl;
	// 单精度
	float f1 = 3.14f;
	cout << "f1 = " << f1 << endl;
	// 双精度
	double d1 = 3.14;
	cout << "d1 = " << d1 << endl;
	// 科学计数法
	float f2 = 3e2;
	cout << "f2 = " << f2 << endl;
	float f3 = 3e-2;
	cout << "f3 = " << f3 << endl;

	//字符型
	char ch = 'a';
	cout << "ch 所占内存空间为：" << sizeof(ch) << endl;
	cout << "查看ch的ASCII编码" << (int)ch << endl; // 97
	system("pause");
	return 0;
} 
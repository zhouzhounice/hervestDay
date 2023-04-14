#include<iostream>
using namespace std;


int main_02() {
	int a = 10;
	// 定义指针 数据类型 *指针变量名
	//int* p;
	// 让指针记录变量a的地址 &:取址符号
	//p = &a;
	// 使用指针 在指针变量名前面加*解引用，找到指针指向内存地址中的值
	//cout << *p << endl;

	//cout << &a << endl;
	/*int* p = &a;
	cout << sizeof(int *) << endl;*/

	// 空指针
	//int* q = NULL;
	// 野指针
	//int* w = (int*)0x1100;

	// 利用指针访问数组元素
	int arr[] = { 1,2,3,4,5,6,7,8,9 };
	//int* p = arr;
	//cout << *p << endl;

	// 利用指针访问数组中所有元素
	for (int* p = arr; *p < 9; p++) {
		cout << *p << endl;
	}
	system("pause");
	return 0;
}
#include<iostream>
using namespace std;

int main_04() {

	// 声明数组方式一 数据类型 数组名[数组长度];
	int score[10];
	score[0] = 100;
	score[1] = 99;
	score[2] = 85;
	// 声明数组方式二 数据类型 数组名[长度] = {值1，值2，值3}
	int arr1[3] = { 10,20,30 };

	// 声明数组方式三 数据类型 数组名[] = {值1，值2，...}
	int arr2[] = { 2,4,6,8,10 };

	system("pause");
	return 0;
}
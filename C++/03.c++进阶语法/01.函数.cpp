#include<iostream>
#include "swap.h"
using namespace std;

// »ù´¡º¯ÊıÓï·¨
int add(int num1, int num2)
{
	int sum = num1 + num2;
	return sum;
}

int main_01() {
	int a = 10;
	int b = 20;
	int res = add(a, b);
	 swap(a, b);
	cout << res << endl;
	system("pause");
	return 0;
}

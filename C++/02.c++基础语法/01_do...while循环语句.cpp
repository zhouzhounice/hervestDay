#include<iostream>
using namespace std;

int main_01() {
	int num = 100;
	
	do {
		int a = num % 10;
		int b = (num / 10) % 10;
		int c = num / 100;
		if (a * a * a + b * b * b + c * c * c == num) {
			cout << num << endl;
		}
		num++;
	} while (num < 1000);
	system("pause");
	return 0;
}
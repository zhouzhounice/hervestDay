#include<iostream>
using namespace std;


int main_02() {
	int a = 10;
	// ����ָ�� �������� *ָ�������
	//int* p;
	// ��ָ���¼����a�ĵ�ַ &:ȡַ����
	//p = &a;
	// ʹ��ָ�� ��ָ�������ǰ���*�����ã��ҵ�ָ��ָ���ڴ��ַ�е�ֵ
	//cout << *p << endl;

	//cout << &a << endl;
	/*int* p = &a;
	cout << sizeof(int *) << endl;*/

	// ��ָ��
	//int* q = NULL;
	// Ұָ��
	//int* w = (int*)0x1100;

	// ����ָ���������Ԫ��
	int arr[] = { 1,2,3,4,5,6,7,8,9 };
	//int* p = arr;
	//cout << *p << endl;

	// ����ָ���������������Ԫ��
	for (int* p = arr; *p < 9; p++) {
		cout << *p << endl;
	}
	system("pause");
	return 0;
}
#include <iostream>
using namespace std;

// �곣��
#define Day 7

int main5()
{
	cout << "short ������ռ�ڴ�ռ�Ϊ��" << sizeof(short) << endl;
	cout << "int ������ռ�ڴ�ռ�Ϊ��" << sizeof(int) << endl;
	cout << "long ������ռ�ڴ�ռ�Ϊ��" << sizeof(long) << endl;
	cout << "long long ������ռ�ڴ�ռ�Ϊ��" << sizeof(long long) << endl;

	cout << "float ������ռ�ڴ�ռ�Ϊ��" << sizeof(float) << endl;
	cout << "double ������ռ�ڴ�ռ�Ϊ��" << sizeof(double) << endl;
	// ������
	float f1 = 3.14f;
	cout << "f1 = " << f1 << endl;
	// ˫����
	double d1 = 3.14;
	cout << "d1 = " << d1 << endl;
	// ��ѧ������
	float f2 = 3e2;
	cout << "f2 = " << f2 << endl;
	float f3 = 3e-2;
	cout << "f3 = " << f3 << endl;

	//�ַ���
	char ch = 'a';
	cout << "ch ��ռ�ڴ�ռ�Ϊ��" << sizeof(ch) << endl;
	cout << "�鿴ch��ASCII����" << (int)ch << endl; // 97
	system("pause");
	return 0;
} 
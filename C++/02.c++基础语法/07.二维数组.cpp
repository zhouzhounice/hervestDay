#include<iostream>
using namespace std;

int main() {
	// �����ά����
	//int arr[2][3] =
	//{
	//	{1,2,3},
	//	{4,5,6}
	//};
	// ��ӡ��ά����
	//for (int i = 0; i < 2; i++) {
	//	for (int j = 0; j < 3; j++) {
	//		cout << arr[i][j] << endl;
	//	}
	//}

	// �������������ġ�������ܳɼ�
	int scores[3][3] = {
		{100,100,100},
		{90,50,100},
		{60,70,80}
	};
	string names[3] = { "����","����","����" };

	for (int i = 0; i < 3; i++) {
		int sum = 0;
		for (int j = 0; j < 3; j++) {
			sum += scores[i][j];
		}
		cout << names[i]<<"�ĳɼ�Ϊ��" << sum << " ";
		cout << endl;
	}
	system("pause");
	return 0;
} 
#include <iostream>
using namespace std;
 #include <ctime>

int main()
{
	// ���������
	 srand((unsigned int)time(NULL));
	int randNum = rand() % 100 + 1;
	cout << randNum << endl;
	// �����û����������
	cout << "������һ�������" << endl;
	int val = 0;
	// �ж�������Ƿ����û�������������
	while (1) {
		cin >> val;

		if (randNum > val) {
			cout << "���������С��" << endl;
		}
		else if (randNum < val) {
			cout << "��������ִ���" << endl;
		}
		else
		{
			cout << "��¶���" << endl;
			break;
		}

	}

	
	system("pause");
	return 0;
}
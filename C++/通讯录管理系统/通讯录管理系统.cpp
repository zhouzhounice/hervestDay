#include<iostream>
using namespace std;

// �˵�����
void showMenu()
{
	string menu[7] = {
		"*****     1�������ϵ��     *****",
		"*****     2����ʾ��ϵ��     *****",
		"*****     3��ɾ����ϵ��     *****",
		"*****     4��������ϵ��     *****",
		"*****     5���޸���ϵ��     *****",
		"*****     6�������ϵ��     *****",
		"*****     0���˳�ͨѶ¼     *****",
	};
	cout << "*********************************" << endl;
	for (int i = 0; i < 7; i++) {
		cout << menu[i] << endl;
	}
	cout << "*********************************" << endl;
}

int main()
{


	while (true) {
		showMenu();
		// �����û�����ı���
		int select;
		// �û�����
		cin >> select;

		// ����������߼�
		switch (select)
		{
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 0:
			cout << "��ӭ�´�ʹ��" << endl;
			system("pause");
			return 0;
			break;
		default:
			break;
		}
	}

	system("pause");
	return 0;
}
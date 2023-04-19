#include<iostream>
#include<string>
constexpr auto MAX = 1000;;
using namespace std;

// �����ϵ�˽ṹ��
struct Person
{
	// ����
	string MyName;
	// �Ա�
	int MySex;
	// ����
	int MyAge;
	// �绰
	string MyPhone;
	// סַ
	string MyAddress;
};
// ���ͨѶ¼�ṹ��
struct AddressBooks
{
	// ͨѶ¼�б�����ϵ�˵�����
	struct Person personArray[MAX];
	// ͨѶ¼�м�¼����Ա����
	int mySize;
};

// �����ϵ��

void addPerson(AddressBooks* abs) {
	// �ж�ͨѶ¼�Ƿ�����
	if (abs->mySize == MAX)
	{
		cout << "ͨѶ¼����" << endl;
		return;
	}
	else {
		// ��������
		string name;
		cout << "������������" << endl;
		cin >> name;
		abs->personArray[abs->mySize].MyName = name;
		// �����Ա�
		int sex;
		cout << "�������Ա�" << endl;
		cout << "1--��" << endl;
		cout << "2--Ů" << endl;
		
		while (true)
		{
			cin >> sex;
			if (sex == 1 || sex == 2) {
				abs->personArray[abs->mySize].MySex = sex;
				break;
			}
			cout << "�밴��ʾ���룡" << endl;
		}
		
		
		// ��������
		int age_;
		cout << "���������䣺" << endl;
		cin >> age_;
		abs->personArray[abs->mySize].MyAge = age_;
		// ����绰
		string phone;
		cout << "������绰��" << endl;
		cin >> phone;
		abs->personArray[abs->mySize].MyPhone = phone;
		// �����ַ
		string address;
		cout << "�������ַ��" << endl;
		cin >> address;
		abs->personArray[abs->mySize].MyAddress = address;

		// ����ͨѶ¼������
		abs->mySize++;

		cout << "��ϵ����ӳɹ�" << endl;
		system("pause");
		system("cls"); // ����
	}
}

// ��ʾ��ϵ��
void showPerson(AddressBooks* abs)
{
	if (abs->mySize == 0)
	{
		cout << "��ǰ��¼Ϊ��" << endl;
	}
	else
	{
		for (int i = 0; i < abs->mySize; i++)
		{
			cout << "������" << abs->personArray[i].MyName << "\t";
			cout << "�Ա�" << (abs->personArray[i].MySex == 1 ? "��" : "Ů") << "\t";
			cout << "���䣺" << abs->personArray[i].MyAge << "\t";
			cout << "�绰��" << abs->personArray[i].MyPhone << "\t";
			cout << "סַ��" << abs->personArray[i].MyAddress << endl;
		}
	}

	system("pause");
	system("cls");
}

// �����ϵ���Ƿ���ͨѶ¼��
int isExist(AddressBooks* abs, string name)
{
	for (int i = 0; i < abs->mySize; i++) {
		// �ҵ��û����������
		if (abs->personArray[i].MyName == name)
		{
			return i;
		}
	}
	return -1;
}

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
	// ����ͨѶ¼�ṹ�����
	AddressBooks abs;
	abs.mySize = 0; // �����û�ѡ������ı���
	

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
			addPerson(&abs);
			break;
		case 2:
			showPerson(&abs);
			break;
		case 3:
		{
			cout << "������ɾ����ϵ��������" << endl;
			string name;
			cin >> name;
			if (isExist(&abs, name) == -1) {
				cout << "���޴���" << endl;
			}
			else
			{
				int i = isExist(&abs, name);
					cout << i << endl;
			}
		}
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
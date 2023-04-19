#include<iostream>
#include<string>
constexpr auto MAX = 1000;;
using namespace std;

// 设计联系人结构体
struct Person
{
	// 姓名
	string MyName;
	// 性别
	int MySex;
	// 年龄
	int MyAge;
	// 电话
	string MyPhone;
	// 住址
	string MyAddress;
};
// 设计通讯录结构体
struct AddressBooks
{
	// 通讯录中保存联系人的数组
	struct Person personArray[MAX];
	// 通讯录中记录的人员个数
	int mySize;
};

// 添加联系人

void addPerson(AddressBooks* abs) {
	// 判断通讯录是否满人
	if (abs->mySize == MAX)
	{
		cout << "通讯录已满" << endl;
		return;
	}
	else {
		// 输入姓名
		string name;
		cout << "请输入姓名：" << endl;
		cin >> name;
		abs->personArray[abs->mySize].MyName = name;
		// 输入性别
		int sex;
		cout << "请输入性别：" << endl;
		cout << "1--男" << endl;
		cout << "2--女" << endl;
		
		while (true)
		{
			cin >> sex;
			if (sex == 1 || sex == 2) {
				abs->personArray[abs->mySize].MySex = sex;
				break;
			}
			cout << "请按提示输入！" << endl;
		}
		
		
		// 输入年龄
		int age_;
		cout << "请输入年龄：" << endl;
		cin >> age_;
		abs->personArray[abs->mySize].MyAge = age_;
		// 输入电话
		string phone;
		cout << "请输入电话：" << endl;
		cin >> phone;
		abs->personArray[abs->mySize].MyPhone = phone;
		// 输入地址
		string address;
		cout << "请输入地址：" << endl;
		cin >> address;
		abs->personArray[abs->mySize].MyAddress = address;

		// 更新通讯录中人数
		abs->mySize++;

		cout << "联系人添加成功" << endl;
		system("pause");
		system("cls"); // 清屏
	}
}

// 显示联系人
void showPerson(AddressBooks* abs)
{
	if (abs->mySize == 0)
	{
		cout << "当前记录为空" << endl;
	}
	else
	{
		for (int i = 0; i < abs->mySize; i++)
		{
			cout << "姓名：" << abs->personArray[i].MyName << "\t";
			cout << "性别：" << (abs->personArray[i].MySex == 1 ? "男" : "女") << "\t";
			cout << "年龄：" << abs->personArray[i].MyAge << "\t";
			cout << "电话：" << abs->personArray[i].MyPhone << "\t";
			cout << "住址：" << abs->personArray[i].MyAddress << endl;
		}
	}

	system("pause");
	system("cls");
}

// 检测联系人是否在通讯录中
int isExist(AddressBooks* abs, string name)
{
	for (int i = 0; i < abs->mySize; i++) {
		// 找到用户输入的姓名
		if (abs->personArray[i].MyName == name)
		{
			return i;
		}
	}
	return -1;
}

// 菜单界面
void showMenu()
{
	string menu[7] = {
		"*****     1、添加联系人     *****",
		"*****     2、显示联系人     *****",
		"*****     3、删除联系人     *****",
		"*****     4、查找联系人     *****",
		"*****     5、修改联系人     *****",
		"*****     6、清空联系人     *****",
		"*****     0、退出通讯录     *****",
	};
	cout << "*********************************" << endl;
	for (int i = 0; i < 7; i++) {
		cout << menu[i] << endl;
	}
	cout << "*********************************" << endl;
}

int main()
{
	// 创建通讯录结构体变量
	AddressBooks abs;
	abs.mySize = 0; // 创建用户选择输入的变量
	

	while (true) {
		showMenu();
		// 创建用户输入的变量
		int select;
		// 用户输入
		cin >> select;

		// 具体操作的逻辑
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
			cout << "请输入删除联系人姓名：" << endl;
			string name;
			cin >> name;
			if (isExist(&abs, name) == -1) {
				cout << "查无此人" << endl;
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
			cout << "欢迎下次使用" << endl;
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
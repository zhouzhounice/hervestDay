#include<iostream>
using namespace std;

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
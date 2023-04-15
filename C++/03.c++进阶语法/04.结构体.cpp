#include<iostream>
#include<string>
using namespace std;

// 创建学生数据类型

struct Student
{
	// 成员列表
	string name;
	// 年龄
	int age;
	// 分数
	int score;
}s3;

int main() {


	// 通过学生类型创建具体的学生
	struct Student s1;
	s1.name = "张三";
	s1.age = 18;
	s1.score = 100;

	struct Student s2
	{
	"李四",
	19,
	80
	};
	s3.name = "王五";
	s3.age = 20;
	s3.score = 60;
	cout << "姓名" << s1.name << "年龄" << s1.age << "分数" << s1.score << endl;
	cout << "姓名" << s2.name << "年龄" << s2.age << "分数" << s2.score << endl;
	cout << "姓名" << s3.name << "年龄" << s3.age << "分数" << s3.score << endl;
	system("pause");
	return 0;
}
#include<iostream>
#include<string>
using namespace std;

// ����ѧ����������

struct Student
{
	// ��Ա�б�
	string name;
	// ����
	int age;
	// ����
	int score;
};

struct Teacher
{
	string name;
	int age;
	int id;
	struct Student stu;
};

int main() {


	// ͨ��ѧ�����ʹ��������ѧ��
	//struct Student s1;
	//s1.name = "����";
	//s1.age = 18;
	//s1.score = 100;

	//struct Student s2
	//{
	//"����",
	//19,
	//80
	//};
	//s3.name = "����";
	//s3.age = 20;
	//s3.score = 60;
	//cout << "����" << s1.name << "����" << s1.age << "����" << s1.score << endl;
	//cout << "����" << s2.name << "����" << s2.age << "����" << s2.score << endl;
	//cout << "����" << s3.name << "����" << s3.age << "����" << s3.score << endl;
	//struct Student stuArray[3]
	//{
	//	{"����",18,100},
	//	{"����",20,80},
	//	{"����",19,70}
	//};

	//Student s = {"����",18,100};
	// ͨ��ָ��ָ��ṹ�����
	//Student* p = &s;
	// ͨ��ָ����ʽṹ������е�����
	//cout << "����" << p->name << endl;

	Teacher t;
	t.id = 001;
	t.name = "����";
	t.age = 50;
	t.stu.name = "����";
	system("pause");
	return 0;
}
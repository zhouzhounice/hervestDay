# 基础语法

## 第一个c++程序

```c++
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World" << endl; // Hello World
    system("psuse");
    return 0;
}
```

## 注释

```c++
// 单行注释

/* 多行注释 */
```

## 变量

```c++
// 变量存在的意义：方便我们管理内存空间
#include <iostream>
using namespace std;

int main()
{
    int a = 10;
    cout << "a = " << a << endl; // a = 10
    system("psuse");
    return 0;
}
```

## 常量

作用：用于记录程序中不可更改的数据

常量两种定义方式：

- #define 宏常量：`#define 常量名 常量值 `  - 通常在文件上方定义
- const修饰的变量 `const 数据类型 常量名 = 常量值` - 通常在变量定义前加关键字const 修饰该变量为常量，不可修改

```c++
#include <iostream>
using namespace std;

// 宏常量
#define Day 7

int main()
{
	cout << "一周总共有" << Day << "天" << endl;

	// const 修饰的变量也为常量
	const int MONTH = 12;
	cout << "一年总共有" << MONTH << "个月" << endl;
	system("pause");
	return 0;
}
```

## 关键字

`https://www.runoob.com/w3cnote/cpp-keyword-intro.html`

## 标识符命名规则

作用：C++规定给标识符(变量、常量)命名时，有一套自己的规则

- 标识符不能是关键字
- 标识符只能由字母、数字、下划线组成
- 第一个字符必须为字母或下划线
- 标识符中字母区分大小写

## 数据类型

存在的意义：为变量分配合适的内存空间

### 整型

作用：整型变量表示的是整数类型的数据

表示整型的类型有：

1. short - 短整型 占用空间：2字节 取值范围：(-2^15 - 2^15-1)
2. int - 整型 占用空间：4字节 取值范围：(-2^31 - 2^31-1)
3. long - 长整型 占用空间：   取值范围：(-2^31 - 2^31-1)
   1. windows : 4字节
   2. Linux：4字节(32位)、8字节(64位)
4. long long - 长长整型 占用空间 8字节 (-2^63 - 2^63-1)

### sizeof关键字

作用：可以统计数据类型所占内存大小

语法：`sizeof(数据类型 / 变量)`

### 实型(浮点型)

作用：用于表示小数

浮点型变量分为两种：

1. 单精度float
2. 双精度double

两者区别在于表示的有效数字范围不同

| 数据类型 | 占用空间 | 有效数字范围    |
| -------- | -------- | --------------- |
| float    | 4字节    | 7位有效数字     |
| double   | 8字节    | 15~16位有效数字 |

注：如果不做配置，则默认显示6位有效数字

### 字符型

语法：`char 变量 = "字符"`

注：

1. __在现实字符型变量时，用单引号将字符括起来，不要用双引号。__
2. __单引号内只能有一个字符，不可以是字符串。__

c和c++中字符型变量只占1个字节

字符型变量并不是把字符本身放在内存中存储，而是将其对应的ASCII编码放入到存储单元

### 字符串

作用：表示一串字符

两种风格：

1. __C风格字符串：__`char 变量名[] = "字符串值"`
2. __C++风格字符串：__`string 变量名 = ”字符串值“`  注：__必须加上头文件：__`#include <string>`

### 布尔类型

作用：布尔数据类型代表真或假的值

bool类型只有两个值：

- true --- 真(本质是1)
- false--- 假(本质是0)

bool类型占一个字节大小

注：__只要是非0的值都代表真__

### 数据的输入

作用：用于从键盘获取数据

关键字：cin

语法：`cin >> 变量`

## 运算符

### 算术运算符

注：

1. 两个整数相除，结果依然是整数，将小数部分去除
2. 两个小数相除，结果可以是小数

#### 前置递增

```c++
#include <iostream>
using namespace std;

int main()
{
    int a = 10;
    int b = ++a * 10;
    cout << a << endl; // 11
    cout << b << endl; // 110
	system("pasue");
    return 0;
}
```

先自增后进行运算

#### 后置递增

```c++
#include <iostream>
using namespace std;

int main()
{
    int a = 10;
    int b = a++ * 10;
    cout << a << endl; // 11
    cout << b << endl; // 100
	system("pasue");
    return 0;
}
```

先运算后进行自增

### 赋值运算符

=、+=、-=、*=、/=、%=

### 比较运算符

| 运算符 | 术语     | 示例 | 结果 |
| ------ | -------- | ---- | ---- |
| ==     | 相等于   | 4==3 | 0    |
| !=     | 不等于   | 4!=3 | 1    |
| <      | 小于     | 4<3  | 0    |
| >      | 大于     | 4>3  | 1    |
| <=     | 小于等于 | 3<=3 | 1    |
| >=     | 大于等于 | 2>=3 | 0    |



### 逻辑运算符

| 运算符 | 术语 | 示例   | 结果                                                  |
| ------ | ---- | ------ | ----------------------------------------------------- |
| !      | 非   | !a     | 如果a为假，则!a为真                                   |
| &&     | 与   | a&&b   | 如果a和b都为真，则结果为真；否则为假                  |
| \|\|   | 或   | a\|\|b | 如果a与b有一个值为真，则结果为真;二者都为假时结果为假 |

## 程序流程结构

### 顺序结构

按顺序执行，不发生跳转

### 选择结构

#### if语句

执行满足条件的语句

- 单行if语句 `if(score>600){...}`
- 多行格式if语句`if(score>600){...} else {...}`
- 多条件if语句`if(score>600){...} else if(score>300&&score<500){...} else {...}`

#### 三目运算符

语法：`表达式1 ? 表达式2 : 表达式3`

#### switch语句

执行多条件分支语句

语法：

```c++
#include <iostream>
using namespace std;

int main()
{
	switch(score)
    {
        case 10:
            cout << "您认为是经典电影" << endl;
            break; // 退出当前分支
        case 9:
            cout << "您认为是经典电影" << endl;
            break;
        case 8:
            cout << "您认为是好电影" << endl;
            break;
        case 7:
            cout << "您认为是好电影" << endl;
            break;
        case 6:
            cout << "您认为一般" << endl;
            break;
        case 5:
            cout << "您认为是烂片" << endl;
            break;
        default:
            cout << "您认为是烂片" << endl;
            break;
    }

	system("pause");
	return 0;
}
```



### 循环结构

#### while循环

```c++
#include <iostream>
using namespace std;

int main()
{
	int num = 10;

	while (num>0) {
		cout << num << endl;
		num--;
	}

	system("pause");
	return 0;
}
```



注：循环结构中，程序必须提供退出循环的出口。否则会出现死循环

#### do...while循环

```c++
#include <iostream>

using namespace std;


int main() {
    // do...while语句
    // 在屏幕中输出0到9这10个数字
    int num = 0;
    do{
        cout << num << endl;
        num++;
    } while (num<10);
    // 
    system("pause");
    return 0;
};
```

注：do...while与while区别，do...while要比while先执行一次

#### for循环语句

```c++
#include<iostream>
using namespace std;

int main() {

	for (int i = 0; i < 10; i++) {
		cout << i << endl;
	}

	system("pause");
	return 0;
}
```

### 跳转语句

#### break语句

作用：用于跳出选择结构或者循环结构

使用时机：

- 在switch条件语句中，作用是终止case并且跳出switch
- 出现在循环语句中，作用是跳出当前循环
- 出现在嵌套循环中，跳出最近的内层循环

#### continue

作用：跳过本次循环还未执行的代码，执行下一次循环

#### goto - 流程跳转语句

作用：无条件跳转语句

## 数组

数组特点：

1. 放在一块连续的内存空间
2. 数组中每个元素都是相同数据类型

数组的三个声明方式：

```c++
#include<iostream>
using namespace std;

int main() {

	// 声明数组方式一 数据类型 数组名[数组长度];
	int score[10];
	score[0] = 100;
	score[1] = 99;
	score[2] = 85;
	// 声明数组方式二 数据类型 数组名[长度] = {值1，值2，值3}
	int arr1[3] = { 10,20,30 };

	// 声明数组方式三 数据类型 数组名[] = {值1，值2，...}
	int arr2[] = { 2,4,6,8,10 };

	system("pause");
	return 0;
}
```

注：第二种声明方法，如果在初始化数据时，没有全部填写完，会用0来填充数据

#### 一维数组数组名

用途：

1. 可以统计整个数组在内存中的长度
2. 可以获取数组在内存中的首地址

注意：

数组名是常量，不可以进行赋值操作

#### 冒泡排序

__作用：__

对数组中的元素进行排序

__步骤：__

1. 比较相邻元素，如果第二个元素比第一个元素大，就交换它们。
2. 对每一对元素做同样的工作，执行完毕后，找到一个最大值。
3. 重复以上的步骤，每次确定一个最大数，每次比较次数-1，直到结束

```c++
#include<iostream>
using namespace std;

int main() {
	int arr[] = { 5,2,4,7,8,4,3,2,6,9 };
	cout << "排序前的结果：" << endl;
	for (int i = 0; i < 9; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;

	// 开始冒泡排序
	for (int i = 0; i < 9 - 1; i++) {
		for (int j = 0; j < 9 - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	cout << "排序后的结果：" << endl;
	for (int i = 0; i < 9; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;
	system("pause");
	return 0;
}
```

#### 二维数组数组名

- 查看二维数组所占内存空间
- 获取二维数组首地址

### 函数

#### 概述

作用：将一段经常使用的代码封装起来，减少重复代码。

一个较大的程序，一般分为若干个程序块，每个模块实现特定的功能

#### 函数的定义

函数的定义，5个步骤：

1. 返回值类型
2. 函数名
3. 参数列表
4. 函数体语句
5. return表达式

语法：

```c++
// 基础函数语法
int add(int num1, int num2)
{
	int sum = num1 + num2;
	return sum;
}
```



#### 函数的调用

```c++
#include<iostream>
using namespace std;

// 基础函数语法
int add(int num1, int num2)
{
	int sum = num1 + num2;
	return sum;
}

int main() {
	int a = 10;
	int b = 20;
	int res = add(a, b);
	cout << res << endl;
	system("pause");
	return 0;
}
```



#### 值传递

- 值传递，就是函数调用时实参将数值传入给形参
- 值传递时，如果形参发生变化，并不会影响实参

#### 函数的常见样式

1. 无参无返
2. 无参有返
3. 有参无返
4. 有参有返

#### 函数的声明

`int max(int a,int b)`

- 函数声明要写在main函数之前
- 函数可以重复声明，但是只能定义一次

#### 函数的分文件编写

步骤：

1. 创建`.h`后缀名的头文件
2. 创建`.cpp`后缀名的源文件
3. 在头文件中写函数的声明
4. 在源文件中写函数的定义

### 指针

#### 指针基本概念

作用：通过指针间接访问内存

#### 指针变量的定义和使用

```c++
#include<iostream>
using namespace std;


int main() {
	int a = 10;
	// 定义指针 数据类型 *指针变量名
	int* p;
	// 让指针记录变量a的地址 &:取址符号
	p = &a;
	// 使用指针 在指针变量名前面加*解引用，找到指针指向内存地址中的值
	cout << *p << endl;

	cout << &a << endl;
	system("pause");
	return 0;
}
```

#### 指针所占内存空间

指针也是种数据类型，

在32位操作系统下 指针占4个字节空间大小

在64位操作系统下 指针占8个字节空间大小

#### 空指针和野指针

空指针：指针变量指向内存中编号为0的空间

用途：初始化指针变量

注意：空指针指向的内存空间不可访问



野指针：指针变量指向非法的内存空间

注意：在程序中尽量避免出现野指针

#### const 修饰指针

- const修饰指针 -- 常量指针   特点：指针的指向可以修改，但是指针指向的值不可以修改
- const修饰常量 --指针常量   特点：指针的指向不可以修改，但是指针指向的值可以修改
- const及修饰指针又修饰常量     特点：指针的指向和指针指向的值都不可修改

#### 指针和数组

作用：利用指针访问数组元素

#### 指针和函数

作用：利用指针做函数参数，可以修改实参的值

#### 指针、数组和函数

案例：封装一个函数，利用冒泡排序，实现对整型数组的升序排列

例如：int arr[10] = {4,3,6,9,1,2,10,8,7,5}

### 结构体

#### 结构体基本概念

结构体属于用户自定义的数据类型，允许用户存储不同的数据类型

#### 结构体定义和使用

语法：`struct 结构体名 { 结构体成员列表 }`

注：struct自定义数据类型时不能省略，但是创建变量时可以省略
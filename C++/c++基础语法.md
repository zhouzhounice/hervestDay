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




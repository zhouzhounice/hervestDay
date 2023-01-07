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








// 枚举
enum PageUrl {
  Home_Page_Url = 'url11',
  Setting_page_Url = 'url12',
  Share_page_Url = 'url13',
}

const home = PageUrl.Home_Page_Url;
// console.log(home)

enum Items1_05 {
  Foo, // 0
  Bar = 599,
  Baz, // 600
}
// console.log(Items1_05.Foo)
// console.log(Items1_05.Baz)

// 数字型枚举 延迟求值
const returnNum = () => 200 + 499;

enum Items2_05 {
  Foo = returnNum(), // 699
  // test, //会报错 
  Bar = 599, //599
  Baz // 600
}

// console.log(Items2_05.Foo)
// console.log(Items2_05.Bar)
// console.log(Items2_05.Baz)

enum Mixed1_05 {
  Num1 = 300,
  Num2 = 300,
  Str = 'anne'
}

console.log(Mixed1_05.Num1)
console.log(Mixed1_05[300])
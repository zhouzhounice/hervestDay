// 枚举
// enum Items {
//   Foo,
//   Bar = 599,
//   Baz
// }

// console.log(Items.Foo)
// console.log(Items.Bar)
// console.log(Items.Baz)

// 延迟求值的枚举值
const returnNumber = () => 100 + 499;

// enum Items {
//   Baz,
//   Foo = returnNumber(),
//   Bar = 599,
// }

// console.log(Items.Foo)
// console.log(Items.Bar)
// console.log(Items.Baz)

// 双向映射特性
// enum Items {
//   Foo,
//   Bar,
//   Baz
// }
// const fooValue = Items.Foo;
// const fooKey = Items[0];

// console.log("fooValue===",fooValue)
// console.log("fooKey===",fooKey)

// 常量枚举
const enum Items {
  Foo,
  Bar,
  Baz
}

const fooValue = Items.Foo;
console.log("fooValue===",fooValue)
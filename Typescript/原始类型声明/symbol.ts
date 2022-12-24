const uniqueSymbolFoo: unique symbol = Symbol('anne');
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo; // 不能将类型赋值给uniqueSymbolBar

// 引用已创建的unique symbol类型
declare const uniqueSymbolFoo_03:unique symbol;
const uniqueSymbolBaz: typeof uniqueSymbolFoo_03 = uniqueSymbolFoo_03
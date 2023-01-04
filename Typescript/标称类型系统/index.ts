// type USD =  number;
type CNY = Nominal<number,'CNY'>
// type CNY = number;
type USD = Nominal<number,'USD'>

const CNYCount:CNY = 200 as CNY;
const USDCount:USD = 200 as USD;

function addCny(source:CNY, input:CNY){
  return (source + input) as CNY
}
// 类型的重要意义之一是限制了数据的可用操作与实际意义
// addCny(CNYCount,USDCount); // 报错

// 从类型层面入手无法咋
declare class TagProtector<T extends string> {
  protected__tag__: T //携带额外的信息
}

type Nominal<T,U extends string> = T & TagProtector<U>

class CNY_1 {
  private __tag!:void;
  constructor(public value:number){}
}
class USD_1 {
  private __tag!:void;
  constructor(public value:number){}
}

const CNYCount_1 = new CNY_1(100);
const USDCount_1 = new USD_1(100);

function addCny_1(source:CNY_1, input:CNY_1){
  return (source.value + input.value)
}

addCny_1(CNYCount_1,CNYCount_1)
// addCny_1(USDCount_1,CNYCount_1) //报错
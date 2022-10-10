import Counter from './Counter';
let counter = null;
beforeAll(()=>{
  console.log('befoerAll')
})

beforeEach(()=>{
  counter =  new Counter();
})

afterAll(()=>{
  console.log('afterAll')
})

test('测试类中addOne方法', () => { 
  console.log('befoerAll1')
  counter.addOne();
  expect(counter.number).toBe(1);
 })

test('测试类中addOne方法', () => { 
  console.log('befoerAll2')
  counter.minusOne();
  expect(counter.number).toBe(-1);
 })
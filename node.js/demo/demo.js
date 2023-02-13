setTimeout(()=>{
  console.log(1);
},30)

setTimeout(()=>{
  console.log(4);
},20)

console.log(3);

console.time('A');
for(let i=0;i<8888888;i++){}
console.timeEnd('A')

setTimeout(()=>{
  console.log(2)
},18)

setTimeout(()=>{
  console.log(5)
},25)
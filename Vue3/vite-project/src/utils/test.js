const obj = {
  'obj1':[
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:0,
    },
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:20,
    },
  ],
  'obj2':[
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:30,
    },
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:40,
    },
  ],

}

const arr = [
  {
    name:'obj1',
    label:{
      show:true,
      fontSize:8,
      distance:0,
      position:'top'
    },
    data:[0,20],
    type:'bar'
  },
  {
    name:'obj2',
    label:{},
    data:[30,40],
    type:'bar'
  }
]

function toArry(obj){
  const isObj = Object.prototype.toString.call(obj) === '[object Object]'
  if(!isObj) return
  return Object.keys(obj).map(item =>  ({
    name:item,
    label:{
      show:true,
      fontSize:8,
      distance:0,
      position:'top'
    },
    data:obj[item].map(it => it.statValue),
    type:'bar'
  }))
}

export default {
  toArry,
  obj,
  arr
}
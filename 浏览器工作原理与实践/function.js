// function bar(){
//   console.log(myName)
// }

// function foo(){
//   var myName = "早，保安";
//   bar()
// }

// var myName = '宝，早安'

// foo()
// closure
function foo(){
  var myName = 'A';
  let test = 2;
  var innerBar = {
    getName:function(){
      console.log(test)
      return myName
    },
    setName:function(newName){
      myName = newName
    }
  }
  return innerBar
}

var bar = foo()
bar.setName('极客邦');
bar.getName()
console.log(bar.getName())





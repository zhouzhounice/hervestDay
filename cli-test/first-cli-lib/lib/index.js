module.exports = {
  sum(a,b){
    return a+b
  },
  init({option,param}){
    console.log('执行init流程')
    console.log(option)
    console.log(param)
  }
}
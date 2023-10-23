const Mock = require('mockjs');

const Random = Mock.Random

module.exports = [
    {
        url:'/api/question/:id',
        method:'get',
        response(){
            return {
                error:0,
                data:{
                    id:Random.id(),
                    name:Random.ctitle()
                }
            }
        }
    },
    {
        url:'/api/question',
        method:'post',
        response(){
            return {
                error:0,
                data:{
                    id:Random.id(),
                    name:Random.ctitle()
                }
            }
        }
    }
]
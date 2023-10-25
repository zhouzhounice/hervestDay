const Mock = require('mockjs');
const getQuestionList = require("../data/getQuestionList")

const Random = Mock.Random

module.exports = [
    {
        // 获取单个问卷信息
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
        // 创建问卷
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
    },
    {
        // 获取问卷列表
        url:'/api/question',
        method: 'get',
        response() {
            return {
                error:0,
                data:{
                    list:getQuestionList(),
                    total:100
                }
            };
        }
    }

]
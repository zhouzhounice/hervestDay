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
        response(ctx) {
            const {url='',query={}} =ctx
            const isDelete = url.indexOf('isDelete=true')>=0
            const isStar = url.indexOf('isStar=true')>=0
            const pageSize = parseInt(query.pageSize)||10
            return {
                error:0,
                data:{
                    list:getQuestionList({isDelete, isStar,len:pageSize}),
                    total:100
                }
            };
        }
    }

]
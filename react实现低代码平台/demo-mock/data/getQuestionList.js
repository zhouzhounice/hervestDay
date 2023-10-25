const Mock = require('mockjs');
const Random = Mock.Random

function getQuestionList(len = 50,isDelete=false)
{
    const list = []
    for (let i =0;i<len;i++){
        list.push({
            _id:Random.id(),
            title:Random.ctitle(),
            isPublished:Random.boolean(),
            isStar:Random.boolean(),
            answerCount:Random.natural(),
            createdAt:Random.datetime(),
            isDelete
        })
    }
    return list
}

module.exports = getQuestionList;
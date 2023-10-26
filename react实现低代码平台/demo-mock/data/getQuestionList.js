const Mock = require('mockjs');
const Random = Mock.Random

function getQuestionList(opt)
{
    const {len=10,isDelete=false,isStar=false} = opt
    const list = []
    for (let i =0;i<len;i++){
        list.push({
            _id:Random.id(),
            title:Random.ctitle(),
            isPublished:Random.boolean(),
            isStar,
            answerCount:Random.natural(1,100),
            createdAt:Random.date('yyyy-MM-dd'),
            isDelete
        })
    }
    return list
}

module.exports = getQuestionList;
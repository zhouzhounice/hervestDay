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
                    name:Random.ctitle(),

                    componentList:[
                        {
                            fe_id:Random.id(),
                            type:'questionInfo',
                            title:'问卷信息',
                            isHidden:false,
                            isLocked:false,
                            props:{
                                title:'问卷标题',
                                desc:'问卷描述'
                            }
                        },
                        {
                            fe_id:Random.id(),
                            type:'questionTitle',
                            title:'标题',
                            isHidden:false,
                            isLocked:false,
                            props:{
                                text:'个人信息调研',
                                level:1,
                                isCenter: false
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInput',
                            title: '输入框',
                            isHidden:false,
                            isLocked:false,
                            props: {
                                title: '你的姓名',
                                placeholder:'请输入...'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionParagraph',
                            title: '段落',
                            isHidden:false,
                            isLocked:false,
                            props: {
                                text: '你的爱好',
                                isCenter:false
                            }
                        }
                    ]
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
            const isDeleted = url.indexOf('isDeleted=true')>=0
            const isStar = url.indexOf('isStar=true')>=0
            const pageSize = parseInt(query.pageSize)||10
            return {
                error:0,
                data:{
                    list:getQuestionList({isDeleted, isStar,len:pageSize}),
                    total:100
                }
            };
        }
    },
    {
        // 更新问卷
        url:'/api/question/:id',
        method: 'patch',
        response() {
            return {
                error:0,
            };
        }
    },
    {
        // 复制问卷
        url:`/api/question/duplicate/:id`,
        method:'post',
        response(){
            return {
                error:0,
                data:{
                    id:Random.id(),
                }
            }
        }
    },
    {
         // 批量彻底删除
        url:'/api/question',
        method: 'delete',
        response() {
            return {
                error:0
            };
        }
    }
]
// 表单属性【右面板】
export const formConfig = {
    formRef: 'elForm',
    formModel: 'formData',
    size: 'default',
    labelPosition: 'right',
    labelWidth: 100,
    formRules: 'rules',
    gutter: 15,
    disabled: false,
    inline:false,
    span: 24,
    formBtns: true,
    layoutType: 'pc',  //模型手机  电脑  平板
    padding: 5,
    margin:15,
}


export const inputComponents = [
    {
        // 组件的自定义配置
        __config__: {
            label: '单行文本',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-input',
            tagIcon: 'EditPen',
            defaultValue: '',
            span: 24,
            prepend: null,
            append: null
        },
        // 其余的为可直接写在组件标签上的属性
        style: {},
        attrs:{
            placeholder: '请输入',
            required: true,
            disabled: false,
            readonly: false,
            clearable: false,  //可清空
            'show-word-limit': true,
            'prefix-icon': null,//输入框头部图标
            'suffix-icon': null,//输入框尾部图标
            maxlength: null,
            minlength: null,
        },
        formId:'',
    },
    {
        // 组件的自定义配置
        __config__: {
            label: '多行文本',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-input',
            tagIcon: 'Edit',
            defaultValue: '',
            span: 24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {},
        attrs:{
            id: '123',
            placeholder: '请输入',
            required: true,
            disabled: false,
            readonly: false,
            'show-word-limit': true,
            type: 'textarea',
            maxlength: null,
            minlength: null,
        }
    },
    {
        __config__: {
            label: '密码',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-input',
            tagIcon: 'Lock',
            defaultValue: '',
            span: 24,
            prepend:  null,
            append: null
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            'show-password': true,
            'show-word-limit': true,
            'prefix-icon': null,//输入框头部图标
            'suffix-icon': null,//输入框尾部图标
            required: true,
            maxlength: null,
            minlength: null,
        }

    },{
        __config__: {
            label: '计数器',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-input-number',
            tagIcon: 'ScaleToOriginal',
            defaultValue: 0,
            span: 24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {},
        attrs:{
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            required: true,
            max: undefined,
            min: undefined,
            // min: undefined,
            // max: undefined,
            //'': 'nomal', //控制按钮位置
            controls: true, //控制按钮
            'controls_position': 'nomal', //按钮位置
            step: 1,  //步长 计数器
            precision: 0,  //精度 计数器
            'value': 0,
        }
    },{
        __config__: {
            label: '编辑器',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'BxEditor',
            tagIcon: 'Edit',
            defaultValue: '',
            span: 24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {},
        attrs:{
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            required: true,
        }
    },{
        __config__: {
            label: '代码编辑器',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'BxCodeEditor',
            tagIcon: 'ElemeFilled',
            defaultValue: ``,
            span: 24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {},
        attrs:{
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            required: true,
        }
    },
]




export const selectComponents = [
    {
        // 组件的自定义配置
        __config__: {
            label: '单选框',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-radio-group',
            tagIcon: 'PieChart',
            span: 24,
            defaultValue: 1,
            optionStyle: null,
        },
        // 其余的为可直接写在组件标签上的属性
        attrs: {
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            required: true,
        },
        options: [{
            label: '选项一',
            value: 1,
            checked:false,
        }, {
            label: '选项二',
            value: 2,
            checked:false,
        }]

    },{
        // 组件的自定义配置
        __config__: {
            label: '复选框',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-checkbox-group',
            tagIcon: 'CircleCheck',
            span: 24,
            defaultValue: 1,
            optionStyle: null,
        },
        // 其余的为可直接写在组件标签上的属性
        attrs: {
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            required: true,
        },
        options: [{
            label: '选项一',
            value: 1,
            checked:false,
        }, {
            label: '选项二',
            value: 2,
            checked:false,
        }]
    },
    {
        // 组件的自定义配置
        __config__: {
            label: '下拉选择',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-select',
            tagIcon: 'Finished',
            defaultValue: null,
            span:24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs: {
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            required: true,
            clearable: true,
            size: 'medium',
            multiple: false,  //是否开启多选
            filterable: false, //是否可以搜索
            'allow-create': false, //是否可以创建选项中不存在的选项 多选的情况下才可以
            'option-group': true, //是否可以 选项分组 el-option-group
        },
        options: [
            {
                label: '选项一',
                value:1,
                options: [{
                    label: '选项一1',
                    value: 1
                }, {
                    label: '选项二1',
                    value: 2
                }]
            }, {
            label: '选项二',
            value:2,
            options: [{
                label: '选项一2',
                value: 1
            }, {
                label: '选项二2',
                value: 2
            }]
        }]
    },{
        // 组件的自定义配置
        __config__: {
            label: '级联选择',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-cascader',
            tagIcon: 'ScaleToOriginal',
            defaultValue: undefined,
            required: true,
        },
        // 其余的为可直接写在组件标签上的属性
        placeholder: '请输入',
        style: {width: '100%'},
        attrs:{
            placeholder: '请输入',
            readonly: false,
            disabled: false,
            required: true,
            clearable: true,
            filterable: true, //可搜索
            isPanel: false,  //是否 级联面板
            'collapse-tags': false, //折叠所有选项
            props: {
                checkStrictly: true, //checkStrictly: true 单选选择任意一级选项 multiple:true,多选选择任意一级选项
                multiple:true,
            },
            //'show-all-levels': null, // false 仅显示最后一级 可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。
            options:  [
                {
                    value: 'components',
                    label: '组件库',
                    children: [{
                        value: 'shejiyuanze',
                        label: '输入型组件',
                        children: [{
                            value: 'yizhi',
                            label: '单行文本'
                        }, {
                            value: 'fankui',
                            label: '多行文本'
                        }]
                    }, {
                        value: 'daohang',
                        label: '选择型组件',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '单选项'
                        }, {
                            value: 'dingbudaohang',
                            label: '下拉选择'
                        }]
                    }, {
                        value: 'daohang',
                        label: '布局型组件',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '容器布局'
                        }, {
                            value: 'dingbudaohang',
                            label: '标签选项'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '数据源',
                    children: [{
                        value: 'basic',
                        label: '本地变量',
                        children: [{
                            value: 'layout',
                            label: 'export'
                        }, {
                            value: 'color',
                            label: 'loadScript'
                        }]
                    },{
                        value: 'network',
                        label: '远程',
                    },{
                        value: 'connect',
                        label: '连接器',
                    },]
                }, {
                    value: 'ziyuan',
                    label: '动作面板',
                    children: [{
                        value: 'axure',
                        label: 'JS'
                    }, {
                        value: 'sketch',
                        label: '全局样式'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
        }
    },
    {
        __config__: {
            label: '滑块',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-slider',
            tagIcon: 'SetUp',
            defaultValue: undefined,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%',height:''},
        attrs:{
            step: null,
            range: false, //开启范围选择
            height: null,
            vertical: false, //开启竖向
            readonly: false,
            disabled: false,
            required: true,
            'show-stops': false, //显示间断点
            'show-input': false, //显示输入框
            'format-tooltip':  (val) => {
                return val * 100;  //createElement('slot',{attrs:{slot:'prepend'}}, 'text')
            },
        }
    },{
        __config__: {
            label: '开关',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-switch',
            tagIcon: 'Open',
            defaultValue: true,
            span: 24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {},
        attrs:{
            readonly: false,
            disabled: false,
            required: true,
            'active-color': "#13ce66",
            'inactive-color': null,
            'active-text': null,
            'inactive-text': null,
            'active-value': 1,
            'inactive-value': 0,
        }
    },{
        __config__: {
            label: '时间选择',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-time-picker',
            tagIcon: 'AlarmClock',
            defaultValue: undefined,
            span:24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{
            placeholder:'请选择',
            size: 'medium',
            clearable: null,
            editable: null,  //文本可编辑
            readonly: false,
            disabled: false,
            required: true,
            'is-range': null, //时间范围
            'start-placeholder': null,
            'end-placeholder': null,
            align: 'right', //对齐方式,
            'range-separator': null,  //选择范围的分隔符
            'prefix-icon': null,//输入框头部图标
            'clear-icon': null,//输入框尾部图标
            'value-format': 'HH:mm:sss',
        }
    },{
        __config__: {
            label: '日期选择',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-date-picker',
            tagIcon: 'Calendar',
            defaultValue: undefined,
            span:24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{
            placeholder:'请选择',
            size: 'medium',
            type: 'date',//year/month/date/dates/months/years week/datetime/datetimerange/ daterange/monthrange
            clearable: true,
            editable: null,  //文本可编辑
            readonly: false,
            disabled: false,
            required: true,
            'is-range': null, //时间范围
            'start-placeholder': null,
            'end-placeholder': null,
            align: null, //对齐方式,
            'range-separator': null,  //选择范围的分隔符
            'prefix-icon': null,//输入框头部图标
            'clear-icon': 'el-icon-circle-close',//输入框尾部图标
            'value-format': 'HH:mm:sss',      //绑定值的格式。
            'format': "yyyy 年 MM 月 dd 日",  //输入框的格式
            'picker-options':  (val) => {
                return val * 100;  //createElement('slot',{attrs:{slot:'prepend'}}, 'text')
            },
        }
    },{
        __config__: {
            label: '评分',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-rate',
            tagIcon: 'Star',
            defaultValue: undefined,
            span: 24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{
            readonly: false,
            disabled: false,
            required: true,
            max: 5, //
            'allow-half': null, //允许半星选择
            'show-score': null,
            'show-text': null,
            texts: ['极差', '失望', '一般', '满意', '惊喜'],
            textsStr: '极差, 失望, 一般, 满意, 惊喜',
            'text-color': null, //辅助文字的颜色
            'void-color': null, //未选中的颜色
            'score-template': null,
            'void-icon-class': undefined, //"el-icon-setting", //图标类名
        }
    },{
        __config__: {
            label: '穿梭框',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-transfer',
            tagIcon: 'SwitchFilled',
            span:24
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{
            'format-tooltip':  (val) => {
                return val * 100;  //createElement('slot',{attrs:{slot:'prepend'}}, 'text')
            },
            data:[
                { label: '列表0',key: 0, disabled: false},
                { label: '列表1',key: 1, disabled: false},
                { label: '列表2',key: 2, disabled: true},
                { label: '列表3',key: 3, disabled: false},
                { label: '列表4',key: 4, disabled: false},
            ],
            filterable: null,  //是否可搜索
            titles: ['列表1','列表2'],
            'button-texts': ['',''], //自定义操作按钮
        }
    },{
        __config__: {
            label: '颜色选择器',
            labelWidth: null,
            labelPosition: null,
            changeTag: true,
            tag: 'el-color-picker',
            tagIcon: 'Notification',
            defaultValue: undefined,
            span:24,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{
            readonly: false,
            disabled: false,
            required: true,
            'show-alpha': null, //显示透明度
            size: 'medium',
            predefine: [] ,// 预定义颜色
        }
    },{
        __config__: {
            label: '图片',
            labelWidth: null,
            showLabel: true,
            changeTag: true,
            tag: 'el-upload',
            tagIcon: 'Picture',
            defaultValue: undefined,
            required: true,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{
            action:''
        }
    },{
        __config__: {
            label: '上传',
            labelWidth: null,
            showLabel: true,
            changeTag: true,
            tag: 'el-upload',
            tagIcon: 'UploadFilled',
            defaultValue: undefined,
            required: true,
        },
        // 其余的为可直接写在组件标签上的属性
        style: {width: '100%'},
        attrs:{}
    },
]



export const layoutComponents = [
    {
        // 组件的自定义配置
        __config__: {
            label: '容器布局',
            changeTag: true,
            tag: 'el-col',
            tagIcon: 'Grid',
            span: 24,
        },
        layout: 'rowItem',
        // 其余的为可直接写在组件标签上的属性
        style: {'min-height':'100px'},
        attrs:{},
        children:[]
    },{
        // 组件的自定义配置
        __config__: {
            label: '标签选项',
            changeTag: true,
            tag: 'el-col',
            tagIcon: 'Grid',
            children:[]
        },
        layout: 'rowItem',
        // 其余的为可直接写在组件标签上的属性
        style: {'min-height':'100px'},
        attrs:{}
    },{
        // 组件的自定义配置
        __config__: {
            label: '分组卡片',
            labelWidth: null,
            showLabel: true,
            changeTag: true,
            tag: 'el-col',
            tagIcon: 'Grid',
            children:[]
        },
        // 其余的为可直接写在组件标签上的属性
        style: {'min-height':'100px'},
        attrs:{}
    },{
        // 组件的自定义配置
        __config__: {
            label: '按钮组',
            labelWidth: 0,
            labelPosition: 'none',
            changeTag: true,
            tag: 'el-button-group',
            tagIcon: 'Grid',
            children:[]
        },
        layout: 'colItem',
        // 其余的为可直接写在组件标签上的属性
        style: {'min-height':'30px'},
        attrs:{}
    },
]


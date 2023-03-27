import { h,resolveComponent } from "vue"


function getDefualtSlot(currentItem) {

    if (currentItem.__config__.tag === 'el-button-group') {
        return <el-button type="primary"><el-icon className="icon"><UserFilled/></el-icon>按钮文字</el-button>
    }
    if (!Array.isArray(currentItem.options)) return null
    return currentItem.options.map((item, i) => {
        console.log(i)
        let _Slot = ''
        switch (currentItem.__config__.tag) {
            case 'el-radio-group':
                _Slot = currentItem.__config__.optionStyle?<el-radio-button label={item.value}>{item.label}</el-radio-button>:<el-radio label={item.value}>{item.label}</el-radio>
                break;
            case 'el-checkbox-group':
                _Slot = currentItem.__config__.optionStyle?<el-checkbox-button label={item.label} true-label={item.value}>{item.label}</el-checkbox-button>:<el-checkbox label={item.label} true-label={item.value}>{item.label}</el-checkbox>
                //_Slot = <el-radio label={item.value}>{item.label}</el-radio>
                break;
            case 'el-select':
                if (currentItem.attrs['option-group']) {
                    console.log('item----------------', item)
                    let child = item.options.map((ite, index) => {
                        console.log(index)
                        return <el-option label={ite.label} value={ite.value}>{ite.label}</el-option>
                    })
                    _Slot = <el-option-group label={item.label}> {child} </el-option-group>
                } else
                    _Slot = <el-option label={item.label} value={item.value}>{item.label}</el-option>
                break;
            default:
                _Slot = ''
        }

        console.log(_Slot,'--------')
        return (_Slot)
    })
}



const mySlots = {
    default(currentItem) {
        return getDefualtSlot(currentItem)
    },
    prepend(currentItem) {
        return currentItem.__config__.prepend
        //if (this.data.__config__.prepend === undefined) return null
        //return <template name={ 'prepend' }>{currentItem.__config__.prepend}</template>
    },
    append(currentItem){
        //if (this.data.__config__.append === undefined) return null
        return <template v-slot="append">{currentItem.__config__.append}</template>
    }
}

import BxEditor from '@/components/BxEditor.vue';
import BxCodeEditor from "@/components/BxCodeEditor";

export default {
    name: "renderElement",
    components: { BxEditor,BxCodeEditor },
    props:{
        tag:{
            type:String,
            required:true,
        },
        data:{},
    },
    render() {
        let that = this;
        const obj = {
            attrs: {
                value: this.data.__config__.defaultValue,
                onInput: function (event) {
                    console.log('======================',event)
                    that.$emit('input',event);
                },
                on: {
                    input: function (event) {
                        console.log('======================2',event)
                        that.$emit('input2',event);
                    }
                },
            },
            slot: 'prepend',
            domProps: {
                value: this.data.__config__.defaultValue,
                //innerHTML: '<el-button slot="append" icon="el-icon-search"></el-button>'
                //value: that.value  // 类似于使用v-bind将data选项中的value变量绑定到input的value属性上
            },
            on: {
                input: function (event) {
                    console.log('======================',event)
                    that.$emit('input',event);
                }
            },
            style: that.data.style,
            props: {
                text: 'bar',
                value: that.data.__config__.defaultValue,
            },
            slots: ()=> {
                console.log(this.slots)
            },
            scopedSlots2: {//<template slot="prepend">Http://</template>
                default:  () => {
                    console.log('调用default==========')
                },
            },
        }
        obj['attrs'] = { ...obj['attrs'], ...this.data.attrs }

        console.log('=========obj=============',obj['attrs'])


        const children = {
            default: () => mySlots['default'].call(this,this.data),
            //prepend: () => mySlots['prepend'].call(this,this.data),
            //append: () => mySlots['append'].call(this,this.data),
        }
        if (this.data.__config__.prepend) children.prepend = () => this.data.__config__.prepend
        if (this.data.__config__.append) children.append = () => this.data.__config__.append

        //console.log('children============',children)

        return h(resolveComponent(this.tag), obj['attrs'], children)

        //return h(resolveComponent(this.tag), obj['attrs'], { default: () => item.label })
    }
}

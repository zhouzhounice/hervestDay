import {h,resolveComponent} from 'vue'
import { ElInput } from "element-plus";


export default {
    name: "App",
    components:{
      ElInput
    },
    // data(){
    //   return{
    //     name:'viceroy'
    //   }
    // },
    props:{
        tag:{
            type:String,
            required:true,
        },
        data:{},
    },

    setup() {
        let name = 'viceroy'
        let tag  = 'ElInput'
        return {
            name,
            tag
        }
    },
    render() {
        return 	h(resolveComponent(this.tag))
        // setup也是函数返回对象，并且render函数绑定了this，所以可以取到
    }
}


import { defineStore} from "pinia";

export const useLowCodeStore = defineStore({
	id:"lowCode",
	state:()=>{
		return {
			component:[
				{
					code:'button',
					set:'button-set',
					name:'按钮',
					id:1,
					props:{
						type:'primary',
						value:'按钮'
					}
				},
				{
					code:'input',
					set:'input-set',
					name:'输入框',
					id:2,
					props:{
						value: "",
						placeholder: "请输入内容",
					}
				},
			],
			preview: [],
			nowComponent: [],
		}
	},
	actions: {
		previewData(value) {
			this.preview.push(value);
		},
		nowComponentsData(value) {
			this.nowComponent = value;
		},
		updateNowComponents(value) {
			this.nowComponent = value;
			const index = this.preview.findIndex((item) => item.id === value.id);
			this.preview[index] = value;
		},
	},
})

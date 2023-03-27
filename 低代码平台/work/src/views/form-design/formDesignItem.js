import draggable from 'vuedraggable'
import renderElement from "./renderElement";
import {h, resolveComponent} from "vue";


function getItemToolBar(currentItem, self, index, list) {
    const icon = h(resolveComponent(currentItem.__config__.tagIcon));
  return (
      <div class="toolBar">
        <span class="">
          <el-icon >{icon}</el-icon>
          <span>{currentItem.__config__.label}</span>
        </span>
        <span class="move"><el-icon size={13} class=""><Rank/></el-icon></span>
        <span class="drawing-item-copy" title="复制" onClick={event => {
          self.copyFormItem(currentItem, index, list);event.stopPropagation()
        }}>
          <el-icon size={13} class=""><Document/></el-icon>
        </span>
        <span class="delete" title="删除" onClick={event => {
          self.delFormItem(index, list);event.stopPropagation()
        }}>
          <el-icon size={13} class=""><Delete/></el-icon>
        </span>

      </div>
  )
}

function getColItem(currentItem, self, index, list) {
  //const { activeFormItem } = this.$listeners
  //console.log('currentItem----', currentItem)
  //console.log('self.activeItemId----', self.activeItemId)
  const itemClass = currentItem.formId === self.activeItemId ? 'center_component_item active-item' : 'center_component_item';
  const itemToolBar = getItemToolBar(currentItem, self, index, list)
  let labelWidth = currentItem.__config__.labelWidth ? `${currentItem.__config__.labelWidth}px` : null
  let labelPosition = currentItem.__config__.labelPosition
  let formLabelPosition = self.formConfig.labelPosition
  let label = currentItem.__config__.label;


  //const config = currentItem.__config__
  if( labelPosition === 'none' || formLabelPosition === 'none' ) {
    label = ''; labelWidth = '0'
  }
  const formItemClass = labelPosition !== 'none' && labelPosition !== null? 'label-'+labelPosition : '';

  return (
      <el-col span={currentItem.__config__.span} class={itemClass} onClick={event => {
        self.activeThisItem(currentItem);event.stopPropagation();console.log(event)
      }}>
        <el-form-item class={formItemClass} label={label} label-width={labelWidth}
                      required={currentItem.attrs.required}>
          <render-element tag={currentItem.__config__.tag} data={currentItem} onInput={ event => {
              console.log(event)
              currentItem.__config__.defaultValue = event;
          }}>
          </render-element>
        </el-form-item>
        {itemToolBar}
      </el-col>
  )

}


function getRowItem(currentItem, self, index,list) {
  const itemClass = currentItem.formId === self.activeItemId ? 'drawing-row-item active-item' : 'drawing-row-item';
  const itemToolBar = getItemToolBar(currentItem, self, index, list)
  const child = getChildItem(currentItem, self)
  console.log(child)
  const slots = {
      item: ({element}) => {
          console.log(element)
          return getChildItem(currentItem, self)
      }
  }
  //const itemToolBar = getItemToolBar(h, currentItem, self)
    return (
      <el-col test="test" span={currentItem.__config__.span} style="padding:0">
        <el-row style="display:block" gutter={currentItem.gutter} class={itemClass} nativeOnClick={event => {
          self.activeThisItem(currentItem); event.stopPropagation() }}>
          <draggable class="drag-wrapper" ghostClass="ghost" style="min-height:80px;padding:15px 5px 5px"
                     list={currentItem.children || []} animation={0}
                     sort={true}
                     change={event => {
              console.log('333333333333333',event);}}
                     item-key={ 'formId' }
                     group={{
                         name: 'componentsGroup',
                         pull: false,
                         animation:340,
                       }}
                     v-slots={ slots }
                     >
          </draggable>
          {itemToolBar}
        </el-row>
      </el-col>
  )
}

function getChildItem(currentItem, self) {
  if (!Array.isArray(currentItem.children)) return (<div></div>)
  console.log('currentItem==', currentItem)
  return currentItem.children.map((el, i) => {
    console.log(i)
    if (el.layout === 'rowItem') {
      return getRowItem(el, self,i,currentItem.children)
    }else{
      return getColItem(el, self,i,currentItem.children)
    }
    //return '404'
  })
}



export default {
  name: "formDesignItem",
  components: {renderElement},
  props: [
    'currentItem',
    'activeItemId',
    'rightList',
    'index',
    'formData',
    'formConfig',
  ],
  methods: {
      onChange (e) {
          console.log('eeeeeeeee',e)
      },
      delFormItem(index, list) {
          list.splice(index, 1)
      },
      activeThisItem(currentItem) {
          console.log('activeFormItem----', currentItem)
          //activeFormItem
          this.$emit('CallParentMethods','activeFormItem', currentItem);
          this.$emit('activeFormItem', 'activeFormItem');
      },
  },


  render() {
    let renderRes = null;
    if (this.currentItem.layout === 'rowItem') {
      renderRes = getRowItem(this.currentItem, this, this.index, this.rightList)
    }else{
      renderRes = getColItem(this.currentItem, this, this.index, this.rightList)
    }
    //const layout = layouts[this.currentItem.__config__.layout]
    return renderRes
    //return layoutIsNotFound.call(this)
  }

}



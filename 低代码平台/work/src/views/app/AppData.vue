<template>

<div>
  <bxTable ref="table" :apiObj="apiObj" row-key="id" @updateParentData="UpdateThisData" @selection-change="selectionChange" stripe>

    <template v-slot:header_left>
      <el-button type="primary" @click="add"><el-icon><Plus /></el-icon>{{ myMessage }}</el-button>
      <el-button type="danger" plain :disabled="selection.length==0" @click="batch_del"><el-icon><Delete /></el-icon></el-button>
    </template>
    <template v-slot:header_serach_item>
      <el-header :visible="drawerVisible" style="flex-wrap: wrap;height:auto;padding: 15px 25px 0 25px">
        <el-form-item label="Name">
          <el-input />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input />
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input />
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input />
        </el-form-item>

        <el-form-item >
          <el-button-group>
            <el-button type="primary" icon="el-icon-search" >搜索</el-button>
            <el-button type="primary" icon="el-icon-search" >清空</el-button>
          </el-button-group>
        </el-form-item>
      </el-header>
    </template>

    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column label="#" type="index" width="50"></el-table-column>
    <el-table-column label="App名称" prop="app_name" width="150"></el-table-column>
    <el-table-column label="AppId" prop="app_id" width="200"></el-table-column>
    <el-table-column label="排序" prop="sort" width="80"></el-table-column>
    <el-table-column label="状态" prop="status" width="80">
      <template #default="scope">
        <el-switch v-model="scope.row.status" @change="changeSwitch($event, scope.row)" :loading="scope.row.$switch_status" active-value="1" inactive-value="0"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="创建时间" prop="date" width="180"></el-table-column>
    <el-table-column label="备注" prop="remark" min-width="150"></el-table-column>
    <el-table-column label="操作" fixed="right" align="center" width="170">
      <template #default="scope">
        <el-button-group>
          <el-button text type="primary" size="small" @click="table_show(scope.row, scope.$index)">查看</el-button>
          <el-button text type="primary" size="small" @click="table_edit(scope.row, scope.$index)">编辑</el-button>
          <el-popconfirm title="确定删除吗？" @confirm="table_del(scope.row, scope.$index)">
            <template #reference>
              <el-button text type="danger" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </el-button-group>
      </template>
    </el-table-column>

  </bxTable>

<!--  <save-dialog v-if="dialog.save" ref="saveDialog" @success="handleSaveSuccess" @closed="dialog.save=false"></save-dialog>-->

<!--  <permission-dialog v-if="dialog.permission" ref="permissionDialog" @closed="dialog.permission=false"></permission-dialog>-->
</div>
</template>

<script>
import bxTable from '@/components/bxTable';
import {Delete, Plus} from "@element-plus/icons-vue";

export default {
  name: 'AppData',
  components: {
    Delete,
    Plus,
    bxTable,
  },
  data() {
    return {
      dialog: {
        save: false,
        permission: false
      },
      apiObj: this.$http.apps.getList,
      selection: [],
      dialogVisible: false,
      drawerVisible: false,
      myMessage: '新增',
      search: {
        keyword: null
      }
    }
  },
  methods: {
    UpdateThisData(setKey, setValue) {
      console.log(setKey, setValue)
      if( this[setKey] ) this[setKey] = setValue
    },
    //添加
    add(){
      this.dialog.save = true
      this.$nextTick(() => {
        this.$refs.saveDialog.open()
      })
    },
    //编辑
    table_edit(row){
      this.dialog.save = true
      this.$nextTick(() => {
        this.$refs.saveDialog.open('edit').setData(row)
      })
    },
    //查看
    table_show(row){
      this.dialog.save = true
      this.$nextTick(() => {
        this.$refs.saveDialog.open('show').setData(row)
      })
    },
    //权限设置
    permission(){
      this.dialog.permission = true
      this.$nextTick(() => {
        this.$refs.permissionDialog.open()
      })
    },
    //删除
    async table_del(row){
      var reqData = {id: row.id}
      var res = await this.$API.demo.post.post(reqData);
      if(res.code == 200){
        this.$refs.table.refresh()
        this.$message.success("删除成功")
      }else{
        this.$alert(res.message, "提示", {type: 'error'})
      }
    },
    //批量删除
    async batch_del(){
      this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？如果删除项中含有子集将会被一并删除`, '提示', {
        type: 'warning'
      }).then(() => {
        const loading = this.$loading();
        this.$refs.table.refresh()
        loading.close();
        this.$message.success("操作成功")
      }).catch(() => {

      })
    },
    //表格选择后回调事件
    selectionChange(selection){
      this.selection = selection;
    },
    //表格内开关
    changeSwitch(val, row){
      row.status = row.status == '1'?'0':'1'
      row.$switch_status = true;
      setTimeout(()=>{
        delete row.$switch_status;
        row.status = val;
        this.$message.success("操作成功")
      }, 500)
    },
    //搜索
    upsearch(){

    },
    //根据ID获取树结构
    filterTree(id){
      var target = null;
      function filter(tree){
        tree.forEach(item => {
          if(item.id == id){
            target = item
          }
          if(item.children){
            filter(item.children)
          }
        })
      }
      filter(this.$refs.table.tableData)
      return target
    },
    //本地更新数据
    handleSaveSuccess(data, mode){
      if(mode=='add'){
        this.$refs.table.refresh()
      }else if(mode=='edit'){
        this.$refs.table.refresh()
      }
    }
  }
}
</script>

<style>
.el-header {
  background: #fff;
  border-bottom: 1px solid var(--el-border-color-light);
  padding: 13px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-panel-search,
.el-header .right-panel
{display: flex;align-items: center;}
.el-header[visible="false"] {display: none}
</style>

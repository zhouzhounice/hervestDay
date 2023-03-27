<template>
  <div class="test">

    <el-form
        ref="ruleFormRef"
        label-width="120px"
        class="demo-ruleForm"
        status-icon
    >
      <el-form-item label="Activity name" prop="name">
        <el-input />
        <el-rate />
      </el-form-item>

      <el-form-item label="label_name2" prop="name">
        <render></render>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" >Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import render from "./render"
export default {
  name: "testItem",
  components: {
    render
  },
}
</script>

<style scoped>

</style>

<template>
  <el-card class="box-card gongsi" style="margin-top: 15px">
    <div style="display:flex;">
      <img src="../../../assets/img/logo_r.png" alt="" style="width: 60px;border-radius: 50%">
      <div style="line-height: 30px;margin-left: 15px;">
        <h3>甘肃百信智能科技有限公司</h3>
        <p style="font-size: 15px">账号未激活,<a href="">前往激活</a></p>
      </div>
    </div>
    <el-descriptions :column=1  min-width="100" style="margin-top: 15px;">
      <el-descriptions-item label-align="right" label="所属组织">甘肃百信智能科技有限公司</el-descriptions-item>
      <el-descriptions-item label-align="right" min-width="100" label="CorpId">dingfe980ae548204293ee0f4 <el-link :underline="false">复制</el-link></el-descriptions-item>
      <el-descriptions-item label-align="right" label="ApiToken">980ae548204293ee0f45d8e <el-link :underline="false">复制</el-link></el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
export default {
  name: "MyGongsi"
}
</script>

<style scoped>

</style>

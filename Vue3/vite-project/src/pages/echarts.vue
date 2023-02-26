<template>
  <div id="main"
       style="width: 600px;height:400px;">
    echarts...
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import * as echarts from 'echarts';
onMounted(async ()=>{
  setTimeout(()=>{
    myChartsFn()
  },1000)
})
const myChartsFn = () =>{

var myChart = echarts.index(document.getElementById('main'));
// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
}
</script>


<style lang='scss' scoped>
</style>

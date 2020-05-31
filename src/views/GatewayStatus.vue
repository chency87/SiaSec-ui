<template>
  <div class="about">
    <PhysicalStatus />

    <div id="main"
         style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>

// 引入基本模板

// import echarts from 'echarts';
import PhysicalStatus from './GatewayStatus/PhysicalStatus.vue';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');

export default {
  data() {
    return {
      size: '',
    };
  },
  components: {
    PhysicalStatus,
  },
  mounted() {
    const myChart = echarts.init(document.getElementById('main'));
    const option = {
      color: ['#f44'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '每月花费',
          type: 'bar',
          barWidth: '60%',
          data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356],
        },
      ],
    };
    myChart.setOption(option);

    // 建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
    window.addEventListener('resize', () => { myChart.resize(); });
  },
};
</script>

<style scoped>
</style>

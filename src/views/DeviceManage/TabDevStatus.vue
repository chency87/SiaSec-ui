<template>
  <div>
    <el-button @click="initChart">init</el-button>
    <el-row :gutter="20">
      <el-col :span="12">
        <div id="NetTraffic-Chart"
             style="width: 600px;height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>

    </el-row>
  </div>
  <!-- <div id="main"
       style="width: 600px;height:400px;"></div> -->
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');

export default {
  name: 'tab-dev-status',
  data() {
    return {
      activeName: 'second',
      netTrafficeData: [{ name: '20222', value: ['2020-07-25  20:10', 128] }, { name: '20223', value: ['2020-7-25 20:15', 198] }],
    };
  },

  props: {
    devToken: {
      type: String,
      default: '',
    },
  },
  methods: {

    initChart() {
      const myChart = echarts.init(document.getElementById('NetTraffic-Chart'));
      const option = {
        title: {
          text: '动态数据 + 时间坐标轴',
        },
        tooltip: {
          trigger: 'axis',
          // formatter(params) {
          //   params = params[0];
          //   const date = new Date(params.name);
          //   return `${date.getDate()}
          // /${date.getMonth() + 1}/${date.getFullYear()} : ${params.value[1]}`;
          // },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false,
          },
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: true,
          data: this.netTrafficeData,
        }],
      };
      myChart.setOption(option);
      window.console.log(this.netTrafficeData);
      // 建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize', () => { myChart.resize(); });
    },
  },
  mounted() {

  },
};
</script>
<style scoped>
.hmi-tabs {
  margin-top: -30px;
}
</style>

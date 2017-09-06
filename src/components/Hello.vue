<template>
  <div class="hello">
    <headertop></headertop>
    <h1>{{ msg }}</h1>
    <div id="charts">
      <div id="main" :style="{width:'100%',height:'600px'}"></div>
    </div>
  </div>
</template>

<script>
import headertop from'./headertop'
let echarts = require('echarts/lib/echarts');
// 引入折现图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/toolbox');

export default {
  name: 'hello',
  components:{
     headertop
  },
  data() {
    return {
      msg: "2017销售盈利数据"
    }
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: { text: '折柱混合' },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
           data: ['订单量', '营业额', '收益走势']
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '订单量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value}'
          }
        },
        {
          type: 'value',
          name: '营业额',
          min: 0,
          max: 50000,
          interval: 5000,
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: '订单量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
          name: '营业额',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: '收益走势',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]

    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

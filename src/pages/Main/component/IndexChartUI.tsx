import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react"

type EChartsOption = echarts.EChartsOption;




const DemoLine: React.FC = () => {
  
const getOption = () => {
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  return option
}
  return <ReactEcharts style={{width:'90%', backgroundColor: 'white'}} option={getOption()} />;
  // style: https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
};

export default DemoLine;

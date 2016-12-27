var myChart = echarts.init(document.getElementById('main'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#a2d7d9','#4da0a4','#78bfb4','#f0e85f','#f55530'] ,
    legend: {
        orient : 'vertical',
        x : 'left',
    },
    series : [
        {
            name:'就业薪资比例',
            type:'pie',
            radius : [50, 80],
            
            // funnelAlign: 'left',
            // max: 1048,
            //  itemStyle : {
            //     normal : {
            //         label : {
            //             position : 'inner'
            //         },
            //         labelLine : {
            //             show : false
            //         }
            //     }
            // },
             label: { 
                normal: { 
                    position: 'inner'
                } 
            }, 
            labelLine: { 
                normal: { 
                    show: false 
                } 
            }, 
            data:[
                {value:7.2},
                {value:15.1},
                {value:22.9},
                {value:17.4},
                {value:37.5}
            ]
        },
        {
            name:'就业薪资比例',
            type:'pie',
            radius : [65, 65],
          
            funnelAlign: 'left',
            max: 1048,
             itemStyle : {
                normal : {
                    label : {
                        position : 'outer',
                        formatter:function(val){   //让series 中的文字进行换行  
                 return val.name.split(" ").join("\n");
             }  
                    },
                    labelLine : {
                        show : true
                    }
                }
            },
            data:[
                {value:7.2, name:'7.2 3k-4.5k'},
                {value:15.1, name:'15.1 4.5k-6k'},
                {value:22.9, name:'22.9 6k-8k'},
                {value:17.4, name:'17.4 8k-10k'},
                {value:37.5, name:'37.5% 10k以上'}
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option); 

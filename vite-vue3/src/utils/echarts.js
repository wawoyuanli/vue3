let value = 65;
option = {
// backgroundColor:"#e2f3f6",
title: [{
        text: '{a|'+ value +'}{c|%}',
        x: 'center',
        y: '42%',
        textStyle: {
            rich:{
                a: {
                    fontSize: 30,
                    color: '#666',
                    fontWeight:'bold' //百分比数字
                },
                
                c: {
                    fontSize: 28,
                    color: '#666', //百分符号颜色
                }
            }
        }
    },{
        text: '达成率',
        x: 'center',
        y: '53%',
        textStyle: {
          fontSize: 22,
          color: '#666',
          fontWeight:'normal'
        }
    }],
    
    series: [ {
            
            type: 'pie',
            radius: ['56%', '45%'],
            silent: true,
            clockwise: true,
            startAngle: 270,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [{
                    value: value,
                    name: "",
                    itemStyle: {
                        normal: {
                            shadowColor: '#8bcfdf',
                            shadowBlur: 10,
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#befffc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#5aafc5' // 100% 处的颜色
                                }]
                            },
                        }
                    }
                },
                {
                    value: 100-value,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#d2e4ea"
                        }
                    }
                }
            ]
        },
         
        
    ]
};

function draw(){
    myChart.setOption(option, true)
   window.requestAnimationFrame(draw);
}
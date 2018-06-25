/**
 * Options
 */
export const Options = {
    // 优劣势学科
    setOption_prosconschart: function (datas, xdata, length, proscons_chart){
        let options = { //数据
            grid: {
                left: 50,
                bottom: '2%',
                top: 30,
                height: '70%',
                width: '80%'
            },
            tooltip: {},
            xAxis: {
                show: true,
                type: 'category',
                data: xdata,
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#666666",
                        width: 2
                    }
                },
                splitLine: {
                    show: true,
                    interval: length
                }
            },
            yAxis: {
                type: 'value',
                splitNumber: 4,
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: function (value) {
                        return value < 25 ? "不及格" : value < 50 ? "及格" : value < 75 ? "良好" : value < 100 ? "优秀" : ""
                    },
                    textStyle: {
                        color: "#787a7a",
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#7dc163",
                        width: 2
                    }
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["#f4f4f4", "#ffffff"]
                    }
                }
            },
            series: [
                {
                    type: 'scatter',
                    data: datas,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            color: '#787a7a'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ff6d65'
                        }
                    },
                    markLine: {
                        symbolSize: [6, 6],
                        tooltip: { formatter: "区域线" },
                        data: [{
                            name: '区域线',
                            yAxis: 60
                        }, {
                            name: '区域线',
                            yAxis: 90
                        }],
                        itemStyle: {
                            normal: {
                                color: "#7dc163",
                                lineStyle: {
                                    type: "solid"
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }

                }
            ]
        }
        proscons_chart.setOption(options);
        window.onresize = proscons_chart.resize;
    },

    //成绩分布
    setOption_achievement: function (achievement_chart) {
        let option = {
            grid: {
                left: "8%",
                right: '8%',
                top: '15%',
                bottom: '15%'
            },
            color: ['#21ade5'],
            /*  tooltip:{
                trigger:'axis'
            },*/
            // legend: {
            //     data:['我的成绩' ,"最高分","平均分"],
            //     right:45,
            //     top:40
            // },
            xAxis: {
                name: '',
                splitLine: { show: true },
                data: ['0-12', '12-24', "24-36", "36-48", "48-60", "60-72", "72-84", "84-96", "96-108", "108-120"],
                axisLabel: {
                    fontSize: 10,
                    show: true,
                    interval: 1
                },
                splitLine: {
                    show: true,
                    interval: 0
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                name: "人数",
                axisTick: {
                    show: false
                },
                type: 'value',
                axisLabel: {
                    fontSize: 10
                }
            },
            series: [{
                name: '人数',
                type: 'bar',
                barWidth: '50%',
                itemStyle: {
                    normal: {
                        barBorderRadius: 1
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#666666',
                        fontSize: 10
                    }
                },
                data: [{ value: 3 }, { value: 3 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 6 }, { value: 8 }, { value: 9, itemStyle: { normal: { color: '#F8C500' } } }, { value: 9 }, { value: 9 }]
            }
            ]
        };
        achievement_chart.setOption(option);
        window.onresize = achievement_chart.resize;
    }, 

    // 排名趋势
    setOption_rankingcontrend: function (rankingcontrend_chart) {
        let option = {
            grid: {
                left: "10%",
                right: '10%',
                top:'5%',
                botton:'5%'
            },
            tooltip: {
                trigger: 'axis',
                formatter: "{a}:<br/><center>{c}</center>"
            },
            legend: {
                data: ['班级总分排名趋势'],
                right: 62,
                top: 20
            },
            xAxis: {
                name: '',
                nameTextStyle: {
                    color: '#666'
                },
                data: ['第一次考试', '第二次考试', "本次考试"],
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#007bba'
                    }
                },
                axisLabel: {
                    color: "#666666"
                },
                axisTick: {
                    show: false
                },
                splitLine: { show: true }
            },
            yAxis: {
                inverse: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#007bba'
                    }
                },
                axisLabel: {
                    color: "#666666",
                    /*formatter: y_axis*/
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["#f4f4f4", "#ffffff"]
                    }
                },
                minInterval: 1,
                boundaryGap: [0, 0.1]
            },
            series: [{
                name: '班级总分排名',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#ff6d65'
                    }
                },
                data: [1, 38, 48]
            }]
        };
        rankingcontrend_chart.setOption(option);
        window.onresize = rankingcontrend_chart.resize;
    }
}
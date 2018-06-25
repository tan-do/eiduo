<template>
    <section class="ReportComponent">
        <div class="report-bg">
            <h1>{{studentName}}专属成绩分析报告</h1>
        </div>
        <section class="report">
            <div class="report-echart">
                <div id="pie-chart">
                </div>
            </div>
            <div class="pie-text">
                <p class="pie-score">{{lastScore}}</p>
                <p class="pie-total">满分:{{lastAll}}</p>
            </div>
        </section>
        <div class="report-exam">
            <p>{{lastReport.examName}}</p>
            <p>考试时间：2017年11月30日</p>
        </div>
        <div class="report-course">
            <ul>
                <li v-for="(item,index) in lastReport.result" :key="index">
                    <b>{{item.subjectName}}</b>
                    <span>{{item.score}}<i>/</i><em>{{item.subjectScore}}</em></span>
                </li>
            </ul>
        </div>
    </section>
</template>


<script>
    //引入主模块
    const echarts = require('echarts/lib/echarts');
    //引入饼图组件
    require('echarts/lib/chart/pie');
    export default {
        data() {
            return {
                user: {},
                studentName: '',
                lastReport: {},
                lastScore: '',
                lastAll: '',
            }
        },
        mounted() {
            this.getUser();
            this.getLastReport();
        },
        methods: {
            getUser() {
                let userData = JSON.parse(localStorage.getItem('user'));
                this.user = userData;
                this.studentName = userData.student.name;
            },
            getLastReport() {
                let systemNo = this.user.student.system_no;
                this.axios.get('/api/eiduo/wReport/getLastReport?systemNo=' + systemNo).then((res) => {
                    //console.log(res.data.data.result)
                    this.lastReport = res.data.data;
                    this.lastScore = res.data.data.totalScore;
                    //alert(this.lastScore);
                    this.lastAll = res.data.data.allSubjectScore;
                    //eharts 饼状图初始化
                    let pieScore = this.lastScore;
                    let pieReduce = this.lastAll - pieScore;
                    this.pieInt(pieScore, pieReduce);
                })
            },
            pieInt(pieScore, pieReduce) {
                // 基于准备好的dom，初始化echarts实例
                const myChart = echarts.init(document.getElementById('pie-chart'));
                // 绘制图表
                let pieOptions = { //饼状图选项数据
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: ['65%', '80%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: pieScore,
                                //name: '直接访问',
                                itemStyle: {
                                    color: '#FA8424'
                                }
                            },
                            {
                                value: pieReduce,
                                //name: '邮件营销'
                                itemStyle: {
                                    color: '#ddd'
                                }
                            },
                        ]
                    }]
                };
                myChart.setOption(pieOptions);
                window.onresize = myChart.resize;
            },
        }
    }
</script>

<style lang="less" scoped>
    .ReportComponent {
        width: 100%;
        height: auto;
        float: left;
        background: #f9f9f9;
        position: relative;
    }
    .report-bg {
        width: 7.5rem;
        height: 2.8rem;
        background: url('../assets/img/report-bg.png') no-repeat;
        background-size: contain;
        float: left;
        position: relative;
        h1 {
            width: 100%;
            font-size: .4rem;
            color: #733120;
            text-align: center; //background: pink;
            float: left;
            margin-top: .4rem;
            margin-bottom: .2rem
        }
    }
    .report-exam {
        width: 100%;
        height: 1.2rem;
        //background: #ddd;
        float: left;
        margin-top:1.2rem;
        p {
            //background: red;
            width: 100%;
            height: .5rem;
            text-align: center;
            font-size: .32rem;
            line-height: .5rem;
            float: left;
        }
        p:last-child {
            font-size: .28rem;
            color: #666;
        }
    }
    .report {
        width: 7.5rem;
        height: auto;
        background: transparent;
        margin-left: -3.75rem;
        position: absolute;
        top: .8rem;
        left: 50%;
        .report-echart {
            width: 100%;
            height: 3rem;
            float: left;
            #pie-chart {
                width: 3rem;
                height: inherit;
                margin: 0 auto;
                //background: #fff;
            }
        }
        .pie-text {
            width: 2rem;
            height: 2rem;
            background: #fff;
            position: absolute;
            border-radius: 2rem;
            left: 50%;
            margin-left: -1rem;
            top: .5rem;
            text-align: center;
            z-index: 0;
            .pie-score {
                width: 100%;
                height: 1.2rem;
                //background: pink;
                line-height: 1.6rem;
                font-size: .42rem;
            }
            .pie-total {
                width: 100%;
                height: .6rem;
                line-height: .4rem;
                //background: #333;
                color: #666;
                font-size: .24rem;
            }
        }
    }
    /* 课程列表 */
    .report-course {
        width: 7rem;
        height: auto;
        background: #fff;
        float: left;
        margin-left: .25rem;
        border: 1px solid #ddd;
        box-sizing: border-box;
        ul {
            width: 100%;
            height: auto;
            float: left;
            li {
                width: 50%;
                height: 1rem;
                float: left;
                font-size: 0;
                box-sizing: border-box;
                border-right: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                color: #000;
                span,
                b {
                    vertical-align: middle;
                    display: inline-block;
                    font-size: .32rem;
                    padding: 0 .2rem;
                }
                span {
                    i {
                        font-size: .24rem;
                        color: #999;
                        font-style: normal;
                        vertical-align: middle; //padding: 0 .06rem;
                        position: relative;
                        top: -.03rem;
                    }
                    em {
                        font-size: .24rem;
                        color: #999;
                    }
                }
            }
            li:nth-child(2n) {
                border-right: none;
            }
            li:after {
                content: '';
                width: 0;
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
</style>


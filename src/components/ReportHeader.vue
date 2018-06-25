<template>
    <section class="ReportComponent">
        <div class="report-bg">
            <h1>{{studentName}}专属成绩分析报告</h1>
        </div>
        <section class="report">
            <div class="report-echart">
                <div id="pie-chart"></div>
            </div>
            <div class="pie-text">
                <p class="pie-score">{{reportdata.totalScore}}</p>
                <p class="pie-total">满分:{{reportdata.subjectScore}}</p>
            </div>
        </section>
        <div class="report-exam">
            <p>{{reportdata.name}}</p>
            <p>考试时间：{{reportdata.examTime}}</p>
        </div>
        <div class="report-course">
            <ul>
                <li v-for="(item,index) in reportdata.result" :key="index">
                    <b>{{item.subjectName}}</b>
                    <span>{{item.totalScore}}<i>/</i><em>{{item.subjectScore}}</em></span>
                </li> 
            </ul>
            <section class="last" v-show="examid">
                <div class="last-report">
                    <router-link :to="{path:'/report',query: {examId:reportdata.examId}}">查看报告</router-link>
                </div>
            </section>
        </div>

    </section>
</template>


<script>
    //引入主模块
    const echarts = require('echarts/lib/echarts');
    //引入饼图组件
    require('echarts/lib/chart/pie');
    export default {
        props:{
          reportdata:{
              type:Object
          }  
        },
        data() {
            return {
                studentName: '',
                examid:true
            }
        },
        mounted() {
            this.getUser();
            let examid = this.$route.query.examId;
            if(examid){this.examid = false}
        },
        watch:{ 
            reportdata:function() {
                 //eharts 饼状图初始化
                let lastAll = this.reportdata.subjectScore;
                let pieScore = this.reportdata.totalScore;
                let pieReduce = lastAll - pieScore;
                this.pieInt(pieScore, pieReduce);
                // console.log(this.reportdata)
            }
        },
        methods: {
            getUser() {
                let userData = JSON.parse(localStorage.getItem('user'));
                this.studentName = userData.student.name;
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
        height: 2.5rem;
        background-image: url("../assets/img/reporthead_bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
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
            font-size: .24rem;
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
                font-size: .26rem;
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
        box-shadow: 1px 1px 5px 1px #ddd;
        border-radius: 5px;
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
                    font-size: .30rem;
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
            li:nth-child(3n):last-child{
                border-bottom: none;
            }
            li:after {
                content: '';
                width: 0;
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .last {
            width: 100%;
            height: auto;
            float: left; //padding-bottom: 1rem;
            .last-report {
                width: 7rem;
                height: auto;
                float: left;
                text-align: center;
                box-sizing: border-box;
                line-height: 1rem;
                a {
                    width: 2.2rem;
                    height: .6rem;
                    background: #F56E03;
                    display: inline-block;
                    border-radius: 1rem;
                    font-size: .22rem;
                    color: #fff;
                    line-height: .6rem;
                }
            }
        }
    }
</style>


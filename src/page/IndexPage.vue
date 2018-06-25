<template>
    <section class="IndexPage">
        <Report></Report>
        <section class="index-history">
            <h1>历次考试</h1>
            <ul>
                <li v-for="(item,index) in PreviousReport" :key="index">
                    <p>{{item.name}}
                        <span v-if="item.isPay == 1">已付费</span>
                        <span v-else class="no-pay">未付费</span>
                    </p>
                    <p>总成绩：{{item.totalScore }}/{{item.subjectScore}}</p>
                    <p>考试时间：{{ item.examTimeStr}} </p>
                    <p>年级：{{item.grade }}年级 学科：多学科</p>
                    <div class="index-report">
                        <router-link :to="{path:'/report',query: {examId:item.examId}}">查看报告</router-link>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
    import Report from '../components/Report.vue';
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
                PreviousReport: {}
            }
        },
        components: {
            Report,
        },
        mounted() {
            this.getUser();
            this.getPreviousReport();
        },
        methods: {
            getUser() {
                let userData = JSON.parse(localStorage.getItem('user'));
                this.user = userData;
                this.studentName = userData.student.name;
            },
            getPreviousReport() {
                let systemNo = this.user.student.system_no;
                this.axios.get('/api/eiduo/report/getPreviousReportStudent?systemNo=' + systemNo + "&page=1" + "&size=3").then((res) => {
                    // console.log(res.data);
                    // this.$store.commit('getStuReport',res.data.data);
                    this.PreviousReport = res.data.data;
                })
            },
        }
    }
</script>

<style lang="less" scoped>
    .IndexPage {
        width: 100%;
        height: auto;
        float: left; //background: #ddd;
        padding-bottom: 1rem;
        min-height: 100vh;
    }
    /* 历次考试 */
    .index-history {
        width: 100%;
        height: auto;
        float: left; //margin-left: .25rem;
        background: #F9F9F9;
        h1 {
            width: 100%;
            height: 1rem;
            float: left;
            line-height: 1rem;
            text-indent: .4rem;
        }
        ul {
            float: left;
            width: 7rem;
            margin-left: .25rem;
            li {
                width: 100%;
                height: auto;
                float: left;
                border: 1px solid #ddd;
                margin-bottom: .4rem;
                background: #fff;
                p {
                    width: 100%;
                    height: 1rem; //background: pink;
                    //border-bottom: 1px solid #ddd;
                    line-height: 1rem;
                    font-size: .32rem;
                    text-indent: .4rem;
                }
                p:first-child {
                    span {
                        width: 1.8rem;
                        height: .6rem;
                        line-height: .6rem;
                        border: 1px solid #FE7032;
                        color: #FE7032;
                        float: right;
                        margin-right: .4rem;
                        margin-top: .2rem;
                        border-radius: .08rem;
                    }
                    span.no-pay {
                        border-color: #666;
                        color: #666;
                    }
                }
                .index-report {
                    width: 100%;
                    height: 2rem; //background: pink;
                    float: left;
                    text-align: center;
                    line-height: 2rem;
                    vertical-align: middle;
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
                    a:hover {
                        background: #ddd;
                    }
                }
            }
        }
    }
</style>

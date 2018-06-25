<template>
    <section>
        <!-- 学生报告头部 -->
        <report-header :reportdata="reportdata"></report-header>
    </section>
</template>

<script>

    import ReportHeader from '../components/ReportHeader.vue'; // 学生报告头部公共样式引入

    export default {
        data() {
            return {
                user: {},
                reportdata:{}
            }
        },
        mounted() {
            this.getUser(); //获取用户信息
            this.getLastReport();// 获取最近的考试报告内容
        },
        methods: {
            getUser() {
                let userData = JSON.parse(localStorage.getItem('user'));
                this.user = userData;
            },
            getLastReport() {
                let systemNo = this.user.student.system_no;
                this.axios.get('/api/eiduo/wReport/getLastReport?systemNo=' + systemNo).then((res) => {
                    this.reportdata = res.data.data;
                    // console.log(this.reportdata);
                })
            },
        },
        components: {ReportHeader},
    }
</script>

<style lang="less" scoped>
</style>


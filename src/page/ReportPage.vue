<template>
    <section class="ReportPage">
        <Head :back="headData.back" :text="headData.text" :share="headData.share"></Head>
        <!-- 查看报告 -->
        <report-detail></report-detail>
    </section>
</template>

<script>
    import ReportDetail from '../components/ReportDetail.vue';
    import Head from '../components/Head.vue';

    export default {
        data(){
            return {
                headData: {
                    back : "/",
                    text : "查看报告",
                    share: "",
                    showShare : false
                }
            }
        },

        components: { Head,ReportDetail,},
    }
</script>



<style lang="less" scoped>

</style>


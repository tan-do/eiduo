<template>
    <section class="ReportPage">
        <Head :back="headData.back" :text="headData.text" :share="headData.share">

        </Head>
        <Report></Report>
    </section>
</template>

<script>
    import Report from '../components/Report.vue';
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

        components: {
            Head,
            Report,
        },
    }
</script>



<style lang="less" scoped>

</style>


<template>
    <section class="MyOrder">
        <Head :back="headData.back" :text="headData.text" :share="headData.share">
        </Head>
    </section>
</template>

<script>
    import Head from '../components/Head.vue';
    export default {
        data() {
            return {
                headData: {
                    back: "/my",
                    text: "意见反馈",
                    share: "",
                    showShare: false
                }
            }
        },
        components: {
            Head,
        }
    }
</script>

<style lang="less" scoped>

</style>


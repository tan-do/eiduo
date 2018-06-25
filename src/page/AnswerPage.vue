<template>
    <section class="AnswerPage">
        <Head :back="headData.back" :text="headData.text" :share="headData.share">
        </Head>
        <p>路由动态参数{{ $route.params.id }}</p>
    </section>
</template>


<script>
    import Head from '../components/Head.vue';
    export default {
        data() {
            return {
                headData: {
                    back: "/",
                    text: "答题情况",
                    share: "",
                    showShare: false
                }
            }
        },
        components: {
            Head,
        },

        beforeRouteUpdate (to, from, next) {
            // react to route changes...
            // don't forget to call next()
        }
    }
</script>

<template>
    <div id="app">
        <router-view></router-view>
        <router-view name="tabbar"></router-view>
    </div>
</template>

<script>
    import './assets/css/public.less';
    import app from './assets/js/app.js';
    app(document, window);
    export default {
        name: 'App',
    }
</script>

<style lang="less" scoped>
    #app {
        max-width: 750px;
        min-height: 100vh;
        width: 7.5rem;
        height: auto;
        background: #fff;
        margin: 0 auto;
    }


</style>

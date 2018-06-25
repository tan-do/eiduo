<template>
    <header>
        <div class="to-login">
            <router-link :to="back">
                <i class="iconfont icon-fanhui1"></i>
            </router-link>
            <h1> {{text}} </h1>
            <router-link :to="share" v-show ="showShare">
                <i class="iconfont icon-fenxiang"></i>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {

    props:{
        back : {
            type : String,
            required :true
        },
        text: {
            type : String,
            required :true
        },

        share : {
            type : String,
        },

        showShare : {
            type: Boolean,
        }
    },

}
</script>




<style lang="less" scoped>
    header {
        .to-login {
            width: 100%;
            height: 1rem;
            background: #fff;
            border-bottom: 1px solid #ddd;
            line-height: 1rem;
            a {
                width: 1rem;
                height: 1rem;
                //background: pink;
                display: block;
                float: left;
                i{
                    width: 1rem;
                    height: 1rem;
                    text-align: center;
                    color: #000;
                    font-size: .4rem;
                }
            }

            h1 {
                width: 5.5rem;
                height: 1rem;
                //background: #333;
                float: left;
                font-size: .32rem;
                font-weight: normal;
                text-align: center;
            }
        }
    }
</style>

<template>
    <section class="PasswordPage">
        <Head :back="headData.back" :text="headData.text" :share="headData.share">

        </Head>
        <div class="password">
            <p><input type="text" placeholder="请输入新密码（6~12位字母、数字、下划线）"></p>
            <p><input type="text" placeholder="请输入新密码（6~12位字母、数字、下划线）"></p>
            <p><input type="button" value="确认修改"></p>
        </div>

    </section>
</template>

<script>
    import Head from '../components/Head.vue';
    export default {
        data(){
            return {
                headData: {
                    back : "/forget",
                    text : "设置新密码",
                    share: "",
                    showShare : false
                }
            }
        },

        components:{
            Head
        }

    }
</script>


<style lang="less" scoped>
    @blue:#00A0E9;

    .password {
        width: 100%;
        //background: pink;
        text-align: center;
        padding-bottom: 1rem;

        p{
            margin-top:.4rem;
        }
        input {
            width: 6rem;
            height: 1rem;
        }

        input[type="button"] {
            background: @blue;
            color: #fff;
        }
    }
</style>




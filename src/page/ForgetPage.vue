<template>
    <section class="ForgetPage">
        <Head :back="headData.back" :text="headData.text" :share="headData.share">

        </Head>
        <div class="step"><span>验证身份</span> <span>设置新密码</span></div>
        <div class="phone">
            <p><input type="text" placeholder="请输入手机号" class="phone-num" autofocus></p>
            <p><input type="text" placeholder="请输入验证码" class="phone-code"> <input type="button" value="获取验证码" class="phone-btn" @click="sendCode()"></p>
            <p>若未绑定手机号，请联系学校管理员重置密码！</p>
            <p><button @click="toNext()">下一步</button></p>
        </div>
    </section>
</template>

<script>
    import Head from '../components/Head.vue';
    import { _util } from '../assets/js/_util.js';
    export default {
        data(){
            return {
                headData: {
                    back : "/login",
                    text : "验证手机号",
                    share: "",
                    showShare : false
                }
            }
        },
        components:{
            Head,
        },

        mounted(){
            //_util.test()
        },
        methods: {
            toNext() {
                //Toast('我是提示文案，建议不超过十五字~');
                alert('下一步');
                this.$router.push({
                    path: 'password'
                })
            },
            sendCode() {
               _util.verCode('.phone-btn')
            }

        }
    }
</script>


<style lang="less" scoped>
    .ForgetPage {
        width: 7.5rem;
        height: auto;
        background: #fff;
        float: left;

        .step {
            width: 100%;
            height: 1rem;
            background: #eee;
            line-height: 1rem;

            font-size: .4rem;
            float: left;
        }
        .phone {
            width: 7.5rem;
            height: auto;
            //background: pink;
            padding-bottom: 1rem;
            float: left;
            p {
                margin-top: .3rem;
                text-align: left;
                width: 100%; //background:pink;
                text-indent: .25rem;
                font-size: .24rem;
                input {
                    width: 7rem;
                    height: 1rem;
                }
                input.phone-code {
                    width: 3.2rem;
                }
                input.phone-btn {
                    width: 3.2rem;
                    margin-left: .35rem;
                    background: #00A0E9;
                    color: #fff;
                    cursor: pointer;
                    text-align: center;
                }
                input.phone-btn:disabled {
                    margin-left: .35rem;
                    background: #bbb;
                    color: #fff;
                }
            }
            p:nth-child(3) {
                font-size: .32rem;
            }
            p:last-child {
                text-align: center;
                button {
                    width: 4rem;
                    height: 1rem;
                    background: #00A0E9;
                }
            }
        }
    }
</style>


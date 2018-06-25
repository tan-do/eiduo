<template>
    <section class="LoginPage">
        <div class="logo">
            <img src="../assets/img/login.png" alt="">
        </div>
        <div class="login">
            <p><input type="text" placeholder="输入爱多分学生账号" autofocus class="login-name" maxlength="18"></p>
            <p><input type="password" placeholder="输入密码" class="login-pwd" maxlength="18"></p>
            <p><button @click="login()">登录</button></p>
            <p><router-link to="/forget">忘记密码</router-link></p>
        </div>
    </section>
</template>

<script>
    export default {
        mounted(){

        },
        methods:{
            login(){
                //let loginName = $('.login-name').val().trim();
                //let loginPassword = $('.login-pwd').val().trim();
                let loginName = 95000250;
                let loginPassword = 123456;
                this.axios.post('/auth/api/login_ios?account=' + loginName +'&psw='+loginPassword+'&type=2').then((res)=>{
                    if(res.data.errorCode == 0){
                        alert('登录成功')

                        let grade = res.data.result.student.grade;

                        if( grade > 9){
                            res.data.result.student.grade = "高中" + (grade - 9) + "年级"
                        }else if(6< grade  && grade <= 9) {

                            res.data.result.student.grade = "初中" + (grade -6) + "年级"
                        }else {
                            res.data.result.student.grade = "小学" + (grade) + "年级"
                        }

                        let userInfo = JSON.stringify(res.data.result);

                        this.$store.commit('setUser',userInfo);

                        this.$router.push({ path: '/' });
                    }else{
                        alert('登录失败')
                    }
                })
            }
        },

        computed: {
            showFoot () {
                return this.$store.state.footComponent
            }
        },


/*         beforeRouteEnter(to, from, next) {
            //this.$store.commit('showFoot');
            alert('进入路由')
            next()
        },

        beforeRouteLeave(to, from, next) {
            //this.$store.commit('showFoot');
            alert('离开路由')
            next()
        },
  */


    }
</script>



<style lang="less" scoped>
@blue:#00A0E9;

    .logo {
        width: 100%;
        height: 3rem;
        background: #fff;
        float: left;
        text-align: center;
        img {
            width:  5rem;
        }
    }
    .login {
        width: 100%;
        height: auto;
        background: #fff;
        float: left;
        p {
            //border: 1px solid #ddd;
            width: 6rem;
            height: .8rem;
            //background: pink;
            margin: .4rem auto;
            text-align: center;
            position: relative;




            button {
                width: 6rem;
                height:.8rem;
                background: @blue;
                font-size: .28rem;
                color: #fff;

            }
        }

        p:last-child{
            a { font-size: .28rem;}
        }

        p:focus{
            border-color: 1px solid #00A0E9;
        }


    }
</style>

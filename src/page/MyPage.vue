<template>
    <section class="MyPage">
        <div class="my-info">
            <div class="my-pic">
                <img :src="studentPic" alt="">
            </div>
            <div class="my-text">
                <p>{{studentName}}</p>
                <p>{{schoolName}}</p>
                <p>{{studentGrade}}{{studentClass}}</p>
                <p>No：{{studentId}}</p>
            </div>
        </div>
        <div class="my-ul">
            <router-link tag="li" to="/myorder">
                <span><i class="iconfont icon-dingdan"></i></span>
                <span>我的订单</span>
                <span><i class="iconfont icon-fanhui1"></i></span>
            </router-link>
            <router-link tag="li" to="/mypassword">
                <span><i class="iconfont icon-iconfontmima"></i></span>
                <span> 修改密码</span>
                <span><i class="iconfont icon-fanhui1"></i></span>
            </router-link>
            <router-link tag="li" to="/myphone">
                <span><i class="iconfont icon-shouji-copy"></i></span>
                <span>修改手机号</span>
                <span><i class="iconfont icon-fanhui1"></i></span>
            </router-link>
            <router-link tag="li" to="/mysuggest">
                <span><i class="iconfont icon-yijianfankui1"></i></span>
                <span>意见反馈</span>
                <span><i class="iconfont icon-fanhui1"></i></span>
            </router-link>
            <router-link tag="li" to="myabout">
                <span> <i class="iconfont icon-guanyu"></i></span>
                <span>关于我们</span>
                <span><i class="iconfont icon-fanhui1"></i></span>
            </router-link>
        </div>
        <p class="my-logout"><button @click="logOut()">退出登录</button></p>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                studentName:'',
                studentPic: '',
                studentGrade:'',
                studentId : '',
                studentClass:'',
                schoolName: '',
            }
        },

        mounted(){
            this.getUser()
        },

        methods: {
            logOut() {
                this.$store.commit('removeUser')
                this.$router.push({
                    path: '/login'
                })
            },
            /*
            getStore(){
                this.studentName = this.$store.getters.getUser.student.name;
                this.studentPic = this.$store.getters.getUser.student.head_img;
                this.studentId = this.$store.getters.getUser.student.id;
                this.schoolName = this.$store.getters.getUser.school.name;
            },
            */
            getUser() {
                let userData = JSON.parse(localStorage.getItem('user'));
                this.studentName = userData.student.name;
                this.studentPic  = userData.student.head_img;
                this.studentGrade = userData.student.grade;
                this.studentClass = userData.student.room_name;
                this.studentId  = userData.student.system_no;
                this.schoolName = userData.school.name;
            },
        }
    }
</script>


<style lang="less" scoped>
    .MyPage {
        width: 7.5rem;
        height: auto; //padding-bottom: .4rem;
        min-height: 100vh;
        background: #F5F5F5;
        float: left;

        .my-info {
            width: 100%;
            height: 2.3rem;
            background: #EE7B0F url('../assets/img/my-bg.png') no-repeat;
            float: left;
            cursor: pointer;
            .my-pic {
                width: 1.4rem;
                height: 1.4rem;
                background: #ddd;
                float: left;
                border-radius: 1.4rem;
                margin: .4rem;
                img {
                    border-radius: 1.4rem;
                    width: 100%;
                }
            }
            .my-text {
                width: 5rem;
                height: 2rem;
                //background: pink;
                margin-top:.2rem;
                float: left;
                p {
                    width: 100%;
                    height: .4rem;
                    font-size: .26rem;
                    color: #fff;
                    line-height: .4rem;
                }

                p:first-child {
                    font-size:  .32rem;
                    margin: .1rem 0;
                }
            }
        }
        .my-ul {
            width: 100%;
            height: auto; //background: pink;
            float: left;
            li {
                width: 100%;
                height: 1rem;
                display: block;
                margin: 0 auto;
                font-size: .32rem;
                line-height: 1rem;
                background: #fff; //border-bottom:1px solid #ddd;
                margin-top: .2rem;
                cursor: pointer;
                position: relative;
                color: #434A54;
                span {
                    height: 1rem;
                    display: block;
                    float: left;
                    text-align: center;
                    i {
                        font-size: .4rem;
                        color: #F56E03;
                    }
                    .icon-yijianfankui1 {
                        font-size:  .6rem;
                        margin-left: .04rem;

                    }
                    .icon-guanyu {
                        font-size: .36rem;
                        margin-left: .06rem;
                    }
                }
                span:first-child {
                    width: 1rem; //background: #EE7B0F;
                    //text-align: left
                }
                span:nth-child(2) {
                    width: 5rem; //background: #ddd;
                    text-align: left
                }
                span:last-child {
                    width: 1rem; //background: #EE7B0F;
                    transform: rotate(180deg);
                    float: right;
                    i{
                        color: #999;
                    }
                }
            }
            li:nth-child(3),
            li:last-child {
                margin-top: 0;
                border-top: 1px solid #ddd;
            }
        }
        .my-logout {
            width: 100%;
            height: 1rem; //background: pink;
            float: left;
            text-align: center;
            margin-top: .5rem;
            margin-bottom: 1.4rem;
            button {
                width: 6.5rem;
                height: 1rem;
                background: #F56E03;
                font-size: .32rem;
                border-radius: 1rem;
                border: none;
            }
            button:hover {
                opacity: .8;
            }
        }
    }
</style>

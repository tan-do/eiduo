<template>
    <section class="DuoPage">
        <section class="duo-bg">
            <h1>多分宝</h1>
            <div class="duo-card" v-if="alreadyPay">
                <div class="duo-head">
                    <div class="duo-pic">
                        <img :src="studentPic" alt="">
                    </div>
                    <div class="duo-info">
                        <p>{{studentName}}</p>
                        <p>{{studentNo}}</p>
                    </div>
                    <div class="duo-logo">
                        <img src="../assets/img/duo-logo.png" alt="">
                        <span>
                            {{alreadyPay}}
                        </span>
                    </div>
                </div>
                <p class="duo-vip">
                    <router-link to="/vip">点亮多分宝</router-link>
                </p>
            </div>
            <div class="duo-card" v-else id="duo-nopay">
                <div class="duo-head">
                    <div class="duo-pic">
                        <img :src="studentPic" alt="">
                    </div>
                    <div class="duo-info">
                        <p>{{studentName}}</p>
                        <p>{{studentNo}}</p>
                    </div>
                    <div class="duo-no">
                        尚未点亮
                    </div>
                </div>
                <p class="duo-vip">
                    <router-link to="/vip">点亮多分宝</router-link>
                </p>
            </div>
        </section>
        <div class="duo-msg" v-if="0">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    合肥一中 张***同学的父母刚刚帮孩子购买了多分宝报告
                </swiper-slide>
                <swiper-slide>
                    合肥八中 李***同学的父母刚刚帮孩子购买了多分宝报告
                </swiper-slide>
                <swiper-slide>
                    合肥十中 李***同学的父母刚刚帮孩子购买了多分宝报告
                </swiper-slide>
                <!-- Optional controls -->
            </swiper>
        </div>
        <div class="duo-tab">
            <ul class="duo-tab-ul">
                <li class="active"><span>荐</span>特权用户</li>
                <li>普通用户</li>
            </ul>
        </div>
        <div class="duo-tab-content">
            <div>
                <ul>
                    <li v-for=" (item,index) in duoVip" :key="index">
                        <p class="p1">
                            <img :src="item.vipImg" alt="">
                        </p>
                        <p class="p2">{{ item.vipTitle}}</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for=" (item,index) in duoNormal" :key="index">
                        <p class="p1">
                            <img :src="item.vipImg" alt="">
                        </p>
                        <p class="p2">
                            {{ item.vipTitle}}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="duo-ban">
            <ul>
                <li>
                    <h3>状元养成计划</h3>
                    <img src="../assets/img/duo-ban-1.png" alt="">
                    <p>总结35位状元学习经验</p>
                    <p>提炼6大养成攻略</p>
                </li>
                <li>
                    <h3>精准诊断提升空间</h3>
                    <img src="../assets/img/duo-ban-2.png" alt="">
                    <p>精准定位10大成绩问题</p>
                    <p>深度挖掘分数价值</p>
                </li>
                <li>
                    <h3>定制专属分析报告</h3>
                    <img src="../assets/img/duo-ban-3.png" alt="">
                    <p>全国12655位小伙伴的共同选择</p>
                    <p>大数据驱动学情分析</p>
                </li>
            </ul>

        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                user: {},
                studentName: '',  //学生名
                studentPic : '',  //头像
                studentNo : '' ,  //准考证号
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    direction: 'vertical',
                },
                alreadyPay:'', //获取报告数量
                duoVip: [{
                        "vipTitle": "我的成绩",
                        "vipImg": require("../assets/img/duo-vip-1.png")
                    },
                    {
                        "vipTitle": "班级分析",
                        "vipImg": require("../assets/img/duo-vip-2.png")
                    },
                    {
                        "vipTitle": "学霸答案",
                        "vipImg": require("../assets/img/duo-vip-3.png")
                    },
                    {
                        "vipTitle": "作答分析",
                        "vipImg": require("../assets/img/duo-vip-4.png")
                    },
                    {
                        "vipTitle": "年纪分析",
                        "vipImg": require("../assets/img/duo-vip-5.png")
                    },
                    {
                        "vipTitle": "优劣学科",
                        "vipImg": require("../assets/img/duo-vip-6.png")
                    },
                    {
                        "vipTitle": "成绩差距",
                        "vipImg": require("../assets/img/duo-vip-7.png")
                    },
                    {
                        "vipTitle": "排名分析",
                        "vipImg": require("../assets/img/duo-vip-8.png")
                    },
                ],
                duoNormal: [{
                        "vipTitle": "我的成绩",
                        "vipImg": require("../assets/img/duo-vip-1.png")
                    },
                    {
                        "vipTitle": "班级分析",
                        "vipImg": require("../assets/img/duo-vip-2.png")
                    },
                    {
                        "vipTitle": "学霸答案",
                        "vipImg": require("../assets/img/duo-vip-3.png")
                    },
                    {
                        "vipTitle": "作答分析",
                        "vipImg": require("../assets/img/duo-vip-4.png")
                    },
                    {
                        "vipTitle": "年纪分析",
                        "vipImg": require("../assets/img/duo-normal-5.png")
                    },
                    {
                        "vipTitle": "优劣学科",
                        "vipImg": require("../assets/img/duo-normal-6.png")
                    },
                    {
                        "vipTitle": "成绩差距",
                        "vipImg": require("../assets/img/duo-normal-7.png")
                    },
                    {
                        "vipTitle": "排名分析",
                        "vipImg": require("../assets/img/duo-normal-8.png")
                    },
                ],

            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },

        mounted() {
            this.getUser();
            this.tabToggle('.duo-tab-ul li', '.duo-tab-content div');
            this.getOrderCount();
        },
        methods: {
            getUser() {
                let userData = JSON.parse(localStorage.getItem('user'));
                this.user = userData;
                this.studentName = userData.student.name;
                this.studentPic  = userData.student.head_img;
                this.studentNo  = userData.student.system_no;
            },
            tabToggle(tabEle, tabList) {
                $(tabEle).on('click', function(event) {
                    $(this).addClass('active').siblings().removeClass('active');
                    var thisIndex = $(this).index();
                    $(tabList).eq(thisIndex).show().siblings().hide();
                });
            },

            getOrderCount(){
                let systemNo = this.user.student.system_no;
                this.axios.get('/api/eiduo/report/getOrderCount?systemNo=' + systemNo).then((res) => {
                    if(res.data.code = 1){
                        //alert(res.data.data.alreadyPay);
                        this.alreadyPay = res.data.data.alreadyPay;
                        //this.alreadyPay = 0;
                    } else {
                        alert ('获取数量失败')
                    }
                })
            }
        }
    }
</script>


<style lang="less" scoped>
    .DuoPage {
        width: 100%;
        height: auto;
        float: left;
        background: #f9f9f9;
        min-height: 100vh;
        padding-bottom: 2rem;
    }
    .duo-bg {
        width: 100%;
        height: 2.6rem;
        background: #222222;
        float: left;
        position: relative;
        h1 {
            width: 100%;
            height: .8rem;
            color: #fff; //background: pink;
            text-align: center;
            line-height: .8rem;
            float: left;
            font-size: .44rem;
            margin-top: .1rem;
            font-weight: normal;
        }

        /* 点亮多分宝 */
        .duo-card {
            width: 6.9rem;
            height: 3rem;
            background: url('../assets/img/duo-bg.png') no-repeat;
            background-size: contain;
            position: absolute;
            top: 1rem;
            left: .3rem;
            border-radius: .2rem;
            .duo-head {
                width: 100%;
                height: 2rem; //background: #eee;
                float: left;
                .duo-pic {
                    width: 1rem;
                    height: 1rem;
                    background: #918373 url('../assets/img/duo-default.png') no-repeat;
                    background-size: cover;
                    float: left;
                    border-radius: 1rem;
                    margin: .4rem;

                    img {
                        width: 100%;
                        border-radius: 1rem;
                    }
                }
                .duo-info {
                    width: 4rem;
                    height: 1rem; //background: pink;
                    float: left;
                    margin-top: .4rem;
                    p {
                        width: 100%;
                        height: .5rem;
                        line-height: .5rem;
                        color: #fff;
                        font-size: .36rem;
                    }
                }
                .duo-logo {
                    width: .6rem;
                    height: 2rem;
                    //background: #ddd;
                    float: right;
                    margin-top: .5rem;
                    margin-right: .5rem;
                    position: relative;
                    img {
                        width: 100%;
                    }

                    span {
                        width: .4rem;
                        height: .4rem;
                        //background: #FE7032;
                        display: block;
                        position: absolute;
                        top:.36rem;
                        left: .1rem;
                        color: #fff;
                        text-align: center;
                        line-height: .4rem;
                        font-size: .24rem;
                    }
                }
            }
            p.duo-vip {
                width: 100%;
                height: 1rem;
                //background: pink;
                float: left;
                text-align: center;
                position: relative;
                top:-.2rem;
                a {
                    padding: .16rem .6rem;
                    background: #E5C890;
                    display: inline-block;
                    border-radius: 1rem;
                    font-size: .28rem;
                    color: #82561D;
                    border:2px solid #82561D;
                }
                a:hover {
                    opacity: .8;
                }
            }
        }

        /* 未点亮 */
        #duo-nopay {
            background: url('../assets/img/duo-bg-nopay.png');
            .duo-no {
                //background: pink;
                position: absolute;
                right: .5rem;
                top:.3rem;
                width: 2rem;
                height: .6rem;
                font-size: .28rem;
                color: #fff;
                text-align: right;
            }
            .duo-vip a {
                background: #ADB2BF;
                color: #767D8D;
                border: 2px solid #7F8A9F;
            }
        }

    }
    .duo-msg {
        width: 100%;
        height: 1rem;
        line-height: 1rem; //background: pink;
        float: left;
        font-size: .28rem;
        margin-top: 1.6rem;
        .swiper-container {
            width: 100%;
            height: inherit;
            vertical-align: middle;
            .swiper-slide {
                //background: pink;
                box-sizing: border-box;
                padding: 0 .4rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }
    .duo-tab {
        width: 7rem;
        height: auto;
        background: pink;
        float: left;
        margin-top: 2rem;
        margin-left: .25rem;
        ul {
            box-sizing: border-box;
            border: 1px solid #ddd;
            width: 100%;
            height: 1rem;
            background: #fff;
            float: left;
            cursor: pointer;
            li {
                width: 2rem;
                height: inherit;
                float: left;
                box-sizing: border-box;
                line-height: 1rem;
                text-align: center;
                font-size: .32rem;
                margin-left: 1rem;
                span {
                    background: #000;
                    color: #fff;
                    width: .3rem;
                    height: .3rem;
                    line-height: .3rem;
                    display: inline-block;
                    font-size: .24rem;
                    border-radius: 4px;
                    margin-right: .1rem;
                }
            }
            li.active {
                border-bottom: 3px solid #FE7032;
                color: #FE7032;
                span {
                    background: #FE7032;
                    color: #fff;
                }
            }
        }
    }
    .duo-tab-content {
        width: 7rem;
        height: 4rem;
        float: left;
        margin-left: .25rem;
        div {
            border: 1px solid #ddd;
            border-top: none;
            border-bottom:none;
            box-sizing: border-box;
            display: none;
            background: #fff;
            width: 100%;
            height: inherit;
        }
        div:first-child {
            display: block;
        }
        ul {
            width: 100%;
            height: inherit;
            li {
                width: 1.7rem;
                height: 1.7rem; //background: #FE7032;
                float: left;
                position: relative;
                left: .1rem;
                text-align: center;
                p.p1 {
                    width: 100%;
                    height: 1rem; //background: red;
                    //line-height: 1rem;
                    img {
                        width: .8rem;
                        height: .8rem;
                        box-sizing: border-box;
                        margin-top: .2rem;
                    }
                }
                p.p2 {
                    width: 100%;
                    height: .6rem;
                    line-height: .6rem;
                    font-size: .24rem; //background: #ddd;
                }
            }
        }
    }
    .duo-ban {
        width: 7rem;
        height: auto;
        background: #fff;
        float: left;
        margin-left: .25rem;
        border: 1px solid #ddd;
        border-top: none;
        box-sizing: border-box;

        ul{
            li {
                width: 6.4rem;
                height: 2.2rem;
                background: url('../assets/img/duo-dashed.png') no-repeat;
                background-size: contain;
                box-sizing: border-box;
                margin-bottom:.4rem;
                margin-left: .3rem;
                position: relative;
                h3 {
                    width: 100%;
                    height: .6rem;
                    //background: pink;
                    text-align: center;
                    color: #DBA20C;
                    font-size: .2rem;
                    position: relative;
                    top:-.1rem;
                }

                p{
                    width: 4rem;
                    height: .4rem;
                    font-size: .24rem;
                    //background: pink;
                    float: right;
                }

                img {
                    position: absolute;
                    width: 1.2rem;
                    top:.3rem;
                    left: .4rem;
                }
            }
        }
    }
</style>


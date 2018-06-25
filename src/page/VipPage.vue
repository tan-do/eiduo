<template>
    <section class="vipPage">
       <h1>{{checkData}}</h1>
        <Head :back="headData.back" :text="headData.text" :share="headData.share">
        </Head>
        <h1>{{checkArr}}</h1>
        <section class="vip">
            <div class="vip-head">
                <div class="vip-all">
                    <input type="checkbox" @click="checkAll($event)" v-model="isChecked">
                    <span v-if="isChecked">反选</span>
                    <span v-else>全选</span>
                </div>
                <div class="vip-fitter">
                    <ul>
                        <li class="active" @click="getOrderList('1')">近三个月</li>
                        <li @click="getOrderList('2')">近半年月</li>
                        <li @click="getOrderList('3')">全部</li>
                    </ul>
                </div>
            </div>
            <div class="vip-ul">
                <ul>
                    <li v-for="(item,index) in vipList" :key="index">
                        <input type="checkbox" v-model="checkData" :value="item">
                        <span class="sp1">{{item.examName}}</span>
                        <span class="sp2">x1</span>
                        <span class="sp3">￥{{item.originalPrice}}</span>
                    </li>
                </ul>
            </div>
            <div class="vip-youhui">
                单价{{originalPrice}}元/次考试，现1折，即{{presentPrice}}元/次考试
            </div>
            <div class="vip-pay">
                <p>数量: <span> {{checkData.length}}</span></p>
                <p>原价: <span>￥{{origin}}</span></p>
                <p>优惠: <span>-￥{{discount}}</span></p>
                <p class="p4">总计: <span>￥{{present}}</span></p>
                <div class="border"></div>
                <p>支付方式: <span>微信</span></p>
                <p class="p6">支付金额: <span>{{present}}元</span></p>
                <p>支付即表示同意
                    <router-link to="/agree">《爱多分服务协议》</router-link>
                </p>
            </div>
        </section>
        <div class="pay-button">
            确认支付
        </div>
        <div class="pay-layer" v-show="showLayer">
            <div class="pay-alert">
                <h1>温馨提示</h1>
                <p><span @click="payLeave()">去意已决</span> <span @click="payContinue()">继续支付</span></p>
            </div>
        </div>
    </section>
</template>

<script>
    import Head from "../components/Head.vue";
    //import { _util } from '../assets/js/_util.js';
    export default {
        data() {
            return {
                headData: {
                    back: "/duo",
                    text: "点亮多分宝",
                    share: "",
                    showShare: false
                },
                isChecked: false,
                checkData: [],   //选中的数据
                originalPrice:'',
                discountPrice:'',
                presentPrice:'',
                vipList: [],
                showLayer: false,
            };
        },
        computed: {
            checkArr(){
                let checkArr = [];
                for(var i= 0;i<this.checkData.length;i++){
                    checkArr.push(this.checkData[i].originalPrice)
                }
                return checkArr
            },
            origin(){
                return (this.checkData.length * parseFloat(this.originalPrice)).toFixed(2)
            },
            discount(){
                return (this.checkData.length * parseFloat(this.discountPrice)).toFixed(2)
            },
            present(){
                return (this.checkData.length * parseFloat(this.presentPrice)).toFixed(2)
            },
        },
        mounted() {
            this.activeToggle('.vip-fitter li');
            this.getOrderList('1');
        },
        components: {
            Head
        },
        methods: {
            activeToggle(tabEle) {
                $(tabEle).on('click', function(event) {
                    $(this).addClass('active').siblings().removeClass('active');
                });
            },
            checkAll() {
                var _this = this;
                //alert(event.currentTarget)
                if (!event.currentTarget.checked) {
                    this.checkData = [];
                } else { //实现全选
                    _this.checkData = [];
                    _this.vipList.forEach(function(item, i) {
                        _this.checkData.push(item);
                    });
                }
            },

            getOrderList(type) {
                let userData = JSON.parse(localStorage.getItem('user'));
                let systemNo = userData.student.system_no;
                 systemNo = 95000670;
                this.axios.get('/api/eiduo/wReport/getOrderList?systemNo=' + systemNo + '&type='+ type).then((res) => {
                    if (res.data.code = 1) {
                        //alert(res.data.data);


                        this.vipList = res.data.data;

                        this.discountPrice =this.vipList[0].discountPrice;
                        this.originalPrice = this.vipList[0].originalPrice;
                        this.presentPrice = this.vipList[0].presentPrice;
                        this.checkData = [];
                        this.isChecked = false;
                    } else {
                        alert('获取数量失败')
                    }
                })
            }
        },
        /*         beforeRouteLeave(to, from, next) {
                    //this.$store.commit('showFoot');
                    alert('离开路由')
                    this.showLayer = true;
                    if(this.showLayer){
                        next(false)
                    }else {
                        next()
                    }
                }, */
    };
</script>

<style lang="less" scoped>
    .vipPage {
        width: 100%;
        height: auto;
        min-height: 100vh;
        background: #f0f0f0;
        float: left;
        position: relative;
    }
    .vip {
        width: 7rem;
        height: auto;
        background: #fff;
        float: left;
        margin-left: 0.25rem;
        margin-top: 0.25rem;
        margin-bottom: 1.4rem;
        .vip-head {
            width: 100%;
            height: 0.8rem;
            background: #fff;
            .vip-all {
                width: 2rem;
                height: inherit; //background: #ddd;
                font-size: .28rem;
                float: left;
                line-height: .8rem;
                position: relative;
                text-indent: .8rem;
                input {
                    width: .4rem;
                    height: .4rem;
                    position: absolute;
                    top: .2rem;
                    left: .2rem;
                    border-radius: 1rem;
                }
            }
            .vip-fitter {
                width: 5rem;
                height: inherit; //background: #f26402;
                float: left;
                ul {
                    width: auto;
                    height: inherit; //background: #666;
                    float: right;
                    margin-right: .4rem;
                    li {
                        float: left;
                        height: .8rem; //padding: 0 .4rem;
                        box-sizing: border-box; //background: pink;
                        margin-left: .4rem;
                        font-size: .24rem;
                        line-height: .8rem;
                        cursor: pointer;
                    }
                    li.active {
                        border-bottom: 4px solid #f26402;
                    }
                }
            }
        }
        .vip-ul {
            width: 100%;
            height: 3rem;
            overflow-y: auto;
            overflow-x: hidden;
            background: #fff;
            float: left;
            ul {
                li {
                    width: 100%;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    background: #f8f8f8;
                    margin-bottom: 0.1rem;
                    position: relative;
                    font-size: 0.28rem;
                    input {
                        width: 0.4rem;
                        height: 0.4rem; //background: pink;
                        position: absolute;
                        left: .2rem;
                        top: 0.25rem;
                        border-radius: 1rem;
                    }
                    span {
                        display: block;
                        height: inherit;
                        position: relative;
                        left: 0.8rem;
                        float: left;
                    }
                    .sp1 {
                        width: 4rem;
                    }
                    .sp2 {
                        width: .8rem;
                    }
                    .sp3 {
                        width: 1.2rem;
                    }
                }
            }
        }
        /* 优惠 */
        .vip-youhui {
            width: 6.6rem;
            height: 0.84rem;
            background: #f9f2e7 url("../assets/img/vip-tehui.png") no-repeat;
            background-size: contain;
            border-radius: 1rem;
            float: left;
            margin: 0.2rem;
            text-align: center;
            line-height: 0.84rem;
            color: #e4bc7c;
            font-size: 0.24rem;
            text-indent: .5rem;
        }
        /* 支付 */
        .vip-pay {
            width: 100%;
            height: auto;
            background: #fff;
            float: left;
            padding-bottom: 1rem;
            overflow-x: hidden;
            p {
                width: 100%;
                height: 1rem;
                border-bottom: 1px solid #ddd;
                line-height: 1rem;
                text-indent: 0.4rem;
                font-size: 0.32rem;
                span {
                    float: right;
                    margin-right: 0.4rem;
                }
            }
            .p4 {
                border: none;
            }
            .p6 {
                span {
                    color: #f26402;
                }
            }
            p:last-child {
                border: none;
                font-size: 0.28rem;
                color: #666;
                a {
                    font-size: 0.28rem;
                    color: #f26402;
                }
            }
            .border {
                width: 100%;
                border: 1px dashed #ddd;
                margin: 0.2rem 0;
                position: relative;
            }
            .border:before {
                content: "";
                width: 0.4rem;
                height: 0.4rem;
                background: #f0f0f0;
                border-radius: 0.4rem;
                position: absolute;
                left: -0.16rem;
                top: -0.2rem;
            }
            .border:after {
                content: "";
                width: 0.4rem;
                height: 0.4rem;
                background: #f0f0f0;
                border-radius: 0.4rem;
                position: absolute;
                right: -0.16rem;
                top: -0.2rem;
            }
        }
    }
    .pay-button {
        width: 7.5rem;
        height: 1rem;
        background: #f26402;
        position: fixed;
        bottom: 0;
        left: 50%;
        margin-left: -3.75rem;
        z-index: 999;
        text-align: center;
        line-height: 1rem;
        font-size: 0.32rem;
        color: #fff;
        cursor: pointer;
    }
    .pay-layer {
        width: 7.5rem;
        height: 100%;
        background: rgba(51, 51, 51, .5);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        .pay-alert {
            width: 4.5rem;
            height: 2.6rem;
            background: #fff;
            position: fixed;
            z-index: 1000;
            top: 50%;
            margin-top: -1.3rem;
            margin-left: 1.5rem;
            border-radius: .2rem;
            h1 {
                width: 100%;
                height: 1rem;
                text-align: center;
                line-height: 1rem;
            }
            p {
                width: 100%;
                height: 1.6rem;
                text-align: center;
                line-height: 1.6rem;
                span {
                    padding: .1rem .2rem;
                    background: #f26402;
                    color: #fff;
                    font-size: .28rem;
                    border-radius: .1rem;
                    margin: 0 .2rem;
                    cursor: pointer;
                }
            }
        }
    }
    /* input */
    input[type=checkbox] {
        width: 30px;
        height: 30px;
        -webkit-appearance: none;
        border: 1px solid #424242;
        padding: 0;
        background-color: #f8f8f8;
        background-image: none;
        border-color: #424242;
        box-shadow: none;
        border-radius: 0;
        outline: none;
        margin: auto;
        position: relative;
    }
    input[type=checkbox]:checked,
    input[type=checkbox].checked {
        border-color: #f26402;
        background: #f26402;
        text-shadow: none;
        box-shadow: none;
        color: #fff;
    }
    input[type=checkbox]:checked::before,
    input[type=checkbox].checked::before {
        width: .4rem;
        height: .4rem;
        background: transparent;
        text-align: center;
        line-height: .4rem;
        float: left;
        position: relative;
        left: -1px;
        top: -1px;
        content: '✔';
        display: block;
        background-size: cover;
        color: #fff;
        font-size: .2rem;
    }
</style>


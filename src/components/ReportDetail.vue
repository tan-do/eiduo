<template>
    <section>
        <!-- 学生报告头部 -->
        <report-header :reportdata="reportdata"></report-header>

        <!-- 报告内容 -->
        <div class="report_content">
            <p class="reportcontent_title"><span ref="ref_stuname">xxx</span>同学，你好</p>
            <ul class="reportdesc">
                <li>
                    <span></span>
                    树立小目标，达到年级排名<b>45%</b>，本次考试再增加<b>22</b>分（分值相减计算出来的数值）就OK了，提分刻不容缓哦！
                </li>
                <li>
                    <span></span>
                    你的各个学科都很优秀，非常不错哦！不过<b>数学</b>相对较弱，建议补强！
                </li>
                <li>
                    <span></span>
                    在你身后，有<b>8</b>位小伙伴稍微努力就能赶上你的总分了哦！重要的事情说三遍：加油！加油！加油！
                </li>
                <li>
                    <span></span>
                    你的班级排名这次进步了<b>12</b>名。
                </li>
                <li>请查看以下分析报告了解详情!</li>
            </ul>
            <!-- 班级分析 -->
            <div class="classanalysis">
                <p><i class="reportmedal_img"></i><span class="reoprttitle_span">班级分析</span></p>
                <ul class="analysisul report_border">
                    <div class="analusisultitle" style="padding-top: 20px;">
                        <span class="firstspan"></span>
                        <span class="otherspan"><span class="spanshadow">我</span></span>
                        <span class="otherspan"><span class="spanshadow">班级</span></span>
                    </div>
                    <li>
                        <div style="margin:5px 0">
                            <div class="firstspan">总分</div>
                            <div class="otherspan"><span style="margin-right:10px" class="spancolor_orange">666</span><span>班级排名：</span><span>30</span></div>
                            <div class="otherspan"><span>平均分：</span><span>666</span></div>
                        </div>
                        <div style="margin:5px 0">
                            <div class="firstspan spancolor_orange">999</div>
                            <div class="otherspan spancolor_def"><span>领先 </span><span>28%</span><span> 的本班同学</span></div>
                            <div class="otherspan"><span>最高分：</span><span>666</span></div>
                        </div>
                    </li>

                    <li>
                        <div style="margin:5px 0">
                            <div class="firstspan">总分</div>
                            <div class="otherspan"><span style="margin-right:10px" class="spancolor_orange">666</span><span>班级排名：</span><span>30</span></div>
                            <div class="otherspan"><span>平均分：</span><span>666</span></div>
                        </div>
                        <div style="margin:5px 0">
                            <div class="firstspan spancolor_orange">999</div>
                            <div class="otherspan spancolor_def"><span>领先 </span><span>18%</span><span> 的本班同学</span></div>
                            <div class="otherspan"><span>最高分：</span><span>666</span></div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 年级分析 -->
            <div class="gradeanalysis">
                <p><i class="reportmedal_img"></i><span class="reoprttitle_span">年级分析</span></p>
                <ul class="analysisul report_border">
                    <div class="analusisultitle" style="padding-top: 20px;">
                        <span class="firstspan"></span>
                        <span class="otherspan"><span class="spanshadow">我</span></span>
                        <span class="otherspan"><span class="spanshadow">年级</span></span>
                    </div>
                    <li>
                        <div style="margin:5px 0">
                            <div class="firstspan">总分</div>
                            <div class="otherspan"><span style="margin-right:10px" class="spancolor_orange">666</span><span>年级排名：</span><span>30</span></div>
                            <div class="otherspan"><span>平均分：</span><span>666</span></div>
                        </div>
                        <div style="margin:5px 0">
                            <div class="firstspan spancolor_orange">999</div>
                            <div class="otherspan spancolor_def"><span>领先 </span><span>28%</span><span> 的本年级同学</span></div>
                            <div class="otherspan"><span>最高分：</span><span>666</span></div>
                        </div>
                    </li>

                    <li>
                        <div style="margin:5px 0">
                            <div class="firstspan">总分</div>
                            <div class="otherspan"><span style="margin-right:10px" class="spancolor_orange">666</span><span>班级排名：</span><span>30</span></div>
                            <div class="otherspan"><span>平均分：</span><span>666</span></div>
                        </div>
                        <div style="margin:5px 0">
                            <div class="firstspan spancolor_orange">999</div>
                            <div class="otherspan spancolor_def"><span>领先 </span><span>18%</span><span> 的本班同学</span></div>
                            <div class="otherspan"><span>最高分：</span><span>666</span></div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 优劣学科 -->
            <div class="prosandcons">
                <p><i class="reportmedal_img"></i><span class="reoprttitle_span">优劣学科</span></p>
                <!-- 散点图 -->
                <div class="report_border">
                    <div id="proscons_chart"></div>

                    <div class="analysis-text">
                        <p class="title" v-if="excellentsubject.length!==0 && !onesubject">优势学科:{{excellentsubject.join('，')}}</p>
                        <p class="title" v-if="inferiorsubject.length!==0 && !onesubject">劣势学科:{{inferiorsubject.join('，')}}</p>
                        <p class="title" v-if="excellentsubject.length==0 && inferiorsubject.length==0 && !onesubject ">你的学科等级与总分等级相同,没有优劣势学科</p>
                        <p class="title" v-if="onesubject">本次考试只有一门学科，没有优劣势学科</p>
                        <p class="content">
                            （1）优劣势学科判断规则：当学科等级优于总分等级，则这门学科是优势学科；当学科等级低于总分等级，则这门学科是劣势学科。如果所有学科的等级都与总分等级相同，那么没有优势学科，也没有劣势学科。</p>
                        <p class="content">
                            （2）等级划分规则：按照各科得分率（得分/满分）将学科划分为4个等级，分别是优秀（得分率≥85%）、良好（75%≤得分率＜85%）、及格（60%≤得分率＜75%）、不及格（得分率＜60%）</p>
                    </div>
                </div>
            </div>

            <!-- 成绩分布 -->
            <div class="achievement_dis">
                <p><i class="reportmedal_img"></i><span class="reoprttitle_span">成绩分布</span></p>
                <div class="report_border">
                    <nav>
                        <p ref="ref_achievement" v-for="(item,index) in subjects" :key="index" @click="deal_achievement(index,item.subjectId)" 
                        :class="{active:index==achievementactive}" >{{item.subjectName}}</p>
                    </nav>

                    <div style="text-align:center;margin-bottom: 10px;">
                        <div class="selgrade_class">
                            <div class="report_grade" :class="{active:achievementtype==1}"  @click="select_achievement(1)">本年级</div>
                            <div class="report_class" :class="{active:achievementtype==2}"  @click="select_achievement(2)">本班级</div>
                        </div>
                    </div>
                    <!-- 柱状图 -->
                    <div class="title_cjfb">
                        <span class="text1"><i></i>我所处的分数段</span>
                        <span class="text2"><i></i>其他同学所处的分数段</span>
                    </div>
                    <div id="achievement_chart"></div> 

                    <span style="font-size: .24rem;margin: 10px;display: inline-block;">说明：你所处的分数段人数越密集，进步空间越大。</span>

                </div>
            </div>

            <!-- 分数差距 -->
            <div class="scoredisparity">
                 <p><i class="reportmedal_img"></i><span class="reoprttitle_span">分数差距</span></p>
                <div class="report_border">
                    <div style="text-align:center">
                        <div class="selgrade_class">
                            <div class="report_grade" :class="{active:scoredisparitytype==1}"  @click="select_scoredisparity(1)">本年级</div>
                            <div class="report_class" :class="{active:scoredisparitytype==2}"  @click="select_scoredisparity(2)">本班级</div>
                        </div>
                    </div>

                    <div class="score_gap">
                        <div class="fircompare-modwarp">
                            <div id="upPartShow" class="upPartShow">         
                                <div class="fircompare-mod clearfix">             
                                    <li class="moda">科目</li>                          
                                    <div class="modb modb-bg">总分</div>                          
                                    <div class="modb modb-bg">历史</div>                          
                                    <div class="modb modb-bg">地理</div>                          
                                    <div class="modb modb-bg">政治</div>                          
                                    <div class="modb modb-bg">-</div>                          
                                    <div class="modb modb-bg">-</div>                      
                                </div>        
                                <div class="fircompare-mod clearfix">            
                                    <div class="moda">最高分差值</div>                          
                                    <div class="modb">0</div>                          
                                    <div class="modb">5</div>                         
                                    <div class="modb">5</div>                         
                                    <div class="modb">5</div>                      
                                    <div class="modb">-</div>                          
                                    <div class="modb">-</div>                    
                                </div>         
                                <div class="fircompare-mod clearfix">           
                                    <div class="moda">最高分</div>                          
                                    <div class="modb">285</div>                        
                                    <div class="modb">100</div>                         
                                    <div class="modb">100</div>                         
                                    <div class="modb">100</div>                         
                                    <div class="modb">-</div>                         
                                    <div class="modb">-</div>                      
                                </div>         
                                <div class="fircompare-mod clearfix my-score">             
                                    <div class="moda">我的分数</div>                         
                                    <div class="modb">285</div>                          
                                    <div class="modb">95</div>                          
                                    <div class="modb">95</div>                         
                                    <div class="modb">95</div>            
                                    <div class="modb">-</div>                       
                                    <div class="modb">-</div>                    
                                </div>      
                                <div class="fircompare-mod clearfix">       
                                    <div class="moda">平均分</div>               
                                    <div class="modb">230.00</div>                          
                                    <div class="modb">79.17</div>                          
                                    <div class="modb">82.07</div> 
                                    <div class="modb">77.56</div>                       
                                    <div class="modb">-</div>  
                                    <div class="modb">-</div>  
                                </div>
                                <div class="fircompare-mod clearfix">       
                                    <div class="moda">平均分差值</div>               
                                    <div class="modb">2</div>                          
                                    <div class="modb">7</div>                          
                                    <div class="modb">2</div> 
                                    <div class="modb">5</div>                       
                                    <div class="modb">-</div>  
                                    <div class="modb">-</div>  
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 排名对比 -->
            <div class="rankingcontrast">
                 <p><i class="reportmedal_img"></i><span class="reoprttitle_span">排名对比</span></p>
                 <div class="report_border">
                     <nav>
                        <p ref="ref_rankingcontrast" v-for="(item,index) in subjects" :key="index" @click="deal_rankingcontrast(index,item.subjectId)" 
                        :class="{active:index==rankingcontrastactive}" >{{item.subjectName}}</p>
                        <p ref="ref_rankingcontrast" v-for="(item,index) in subjects" :key="index" @click="deal_rankingcontrast(index,item.subjectId)" 
                        :class="{active:index==rankingcontrastactive}" >{{item.subjectName}}</p>
                        <p ref="ref_rankingcontrast" v-for="(item,index) in subjects" :key="index" @click="deal_rankingcontrast(index,item.subjectId)" 
                        :class="{active:index==rankingcontrastactive}" >{{item.subjectName}}</p>
                    </nav>

                    <div style="text-align:center">
                        <div class="selgrade_class">
                            <div class="report_grade" :class="{active:rankingcontrasttype==1}"  @click="select_rankingcontrast(1)">本年级</div>
                            <div class="report_class" :class="{active:rankingcontrasttype==2}"  @click="select_rankingcontrast(2)">本班级</div>
                        </div>
                    </div>

                    <!-- 排名对比 内容部分 -->
                    <div class="rankingcontrast_content">
                        <ul >
                            <li>123</li>
                        </ul>
                    </div>

                 </div>
            </div>

            <!-- 排名趋势 -->
            <div class="rankingcontrend">
                 <p><i class="reportmedal_img"></i><span class="reoprttitle_span">排名趋势</span></p>
                 <div class="report_border">
                     <nav>
                        <p ref="ref_rankingcontrend" v-for="(item,index) in subjects" :key="index" @click="deal_rankingcontrend(index,item.subjectId)" 
                        :class="{active:index==rankingcontrendactive}" >{{item.subjectName}}</p>
                    </nav>
                     <div style="text-align:center;margin-bottom: 10px;">
                        <div class="selgrade_class">
                            <div class="report_grade" :class="{active:rankingcontrendtype==1}"  @click="select_rankingcontrend(1)">本年级</div>
                            <div class="report_class" :class="{active:rankingcontrendtype==2}"  @click="select_rankingcontrend(2)">本班级</div>
                        </div>
                    </div>

                    <div id="rankingcontrend_chart"></div> 
                 </div>
            </div>
        </div>
    </section>
</template>

<script>

    import ReportHeader from '../components/ReportHeader.vue'; // 学生报告头部公共样式引入
    import {Common} from '../assets/js/comm.js'
    import {Options} from '../assets/js/echartsoptions.js' // echarts设置option相关
    import queryString from 'queryString'  //转换格式包，无需下载

    //引入主模块
    const echarts = require('echarts/lib/echarts');
    //引入散点图组件
    require('echarts/lib/chart/scatter');
    // 引入柱状图组件
    require('echarts/lib/chart/bar');
    // 引入折线图组件
    require('echarts/lib/chart/line');

    export default {
        data() {
            return {
                reportdata:{},
                systemNo:'',
                examind:'',
                achievementactive:0,// 学科选择默认状态（成绩分布）
                rankingcontrastactive:0,// 学科选择默认状态（排名对比）
                rankingcontrendactive:0,// 学科选择默认状态（排名趋势）
                active:0,// 学科选择默认状态（排名对比）
                subjects:[],//学科
                arr:["语文", "数学","英语","历史","物理","地理","政治"],
                excellentsubject:[],//优势学科
                inferiorsubject:[],//劣势学科
                onesubject:false,
                achievementtype:2,//成绩分布 1:本年级 2：本班级
                scoredisparitytype:2,//分数差距 1:本年级 2：本班级
                rankingcontrasttype:2,//排名对比 1:本年级 2：本班级
                rankingcontrendtype:2,//排名趋势 1:本年级 2：本班级
            }
        },
        mounted() {
            let userData = JSON.parse(localStorage.getItem('user'));
            this.systemNo =userData.student.system_no;
            this.examind = this.$route.query.examId;
            this.axios.get('/api/eiduo/wReport/getReport?systemNo=' + this.systemNo+'&examId='+this.examind).then((res) => {
                if(res.data.code===1){
                     this.reportdata =res.data.data;
                     let sub = this.reportdata.result;
                     for(let i=0;i<sub.length;i++){
                         this.subjects.push({subjectId:sub[i].subjectId,subjectName:sub[i].subjectName});
                     }
                     // 成绩分布
                    let subjectid = this.subjects[0].subjectId;// 默认获取subjectid
                    this.getresultDistribution(subjectid);
                    // 排名趋势
                    this.getschoolSubjectRanking(subjectid,this.rankingcontrendtype);
                }
            });

            // 优劣势学科
            this.axios.get('/api/eiduo/report/proSubject?systemNo='+this.systemNo+'&examId='+this.examind).then(res=>{
                let arr = res.data;
                if(arr.code===1){
                    if(arr.isPay===0){ // 未支付
                    } else if(arr.isPay===1){ // 已支付
                        // 初始化echarts实例
                        var proscons_chart = echarts.init(document.getElementById('proscons_chart'));
                        var datas=[], xdata = [];
                        for(var i=0;i<arr.data.length;i++){
                            let subjectname = Common.subjectid_to_name(arr.data[i].subjectId);
                            datas.push({
                                name:subjectname+'',
                                value:[arr.data[i].subjectId,arr.data[i].rate*100],
                                label:{normal:{formatter:subjectname+''}},
                                itemStyle: {normal: {color: ''}}
                            });
                            if(datas[i].name=="总分"){
                                datas[i].itemStyle.normal.color="#3bafda"
                            }else{
                                datas[i].itemStyle.normal.color="#ff6d65"
                            }
                            xdata.push(arr.data[i].subjectId)
                        }
                        // console.log(datas);
                        var length=datas.length-1;
                        // 绘制图表
                        Options.setOption_prosconschart(datas,xdata,length,proscons_chart);
                        
                        if(datas.length<=2){ // 如果只有一门学科没有优劣势
                            this.onesubject = true;
                        }else {
                            this.onesubject = false;
                            // 判断优劣势学科 excellentsubject:优势学科 inferiorsubject:劣势学科
                            for(let i=1;i<datas.length;i++){
                                if(datas[0].value[1]<datas[i].value[1]){ //优势学科
                                this.excellentsubject.push(datas[i].name);
                                } else if(datas[0].value[1]>datas[i].value[1]){ // 劣势学科
                                    this.inferiorsubject.push(datas[i].name);
                                }
                            } 
                        }
                         
                    }
                }
            })

        },
        methods: {
            // 成绩分布
            getresultDistribution(subjectid){
                let params = {
                    systemNo:this.systemNo,
                    examId:this.examind,
                    subjectId:subjectid,
                    type:this.achievementtype
                }
                this.axios.post('/api/eiduo/report/resultDistribution',queryString.stringify(params)).then((res) => {
                    if(res.data.code===1){
                        // console.log(res.data);
                        // 初始化echarts实例
                        let achievement_chart = echarts.init(document.getElementById('achievement_chart'));
                         // 绘制图表
                        Options.setOption_achievement(achievement_chart);
                    }
                 });
            },
            // 排名趋势
            getschoolSubjectRanking(subjectid,type){
                let params = {
                    systemNo:this.systemNo,
                    examId:this.examind,
                    subjectId:subjectid,
                }
                if(type==1){ // 年级
                    this.axios.post('/api/eiduo/ranking/schoolSubjectRanking',queryString.stringify(params)).then((res) => {
                        if(res.data.code===1){
                            console.log(res.data);
                        }
                    });
                } else if(type==2){ // 班级
                    this.axios.post('/api/eiduo/ranking/roomSubjectRanking',queryString.stringify(params)).then((res) => {
                        if(res.data.code===1){
                            console.log(res.data);
                        }
                    });
                }

                // 初始化echarts实例
                let rankingcontrend_chart = echarts.init(document.getElementById('rankingcontrend_chart'));
                // 绘制图表
                Options.setOption_rankingcontrend(rankingcontrend_chart);
            },
            //  成绩分布选择学科
            deal_achievement(index,subjectid){
                this.achievementactive=index;
                console.log(subjectid);
            },
            // 排名对比选择学科
            deal_rankingcontrast(index,subjectid){
                this.rankingcontrastactive=index;
                console.log(subjectid);
            },
            // 排名趋势选择学科
            deal_rankingcontrend(index,subjectid){
                this.rankingcontrendactive=index;
                console.log(subjectid);
            },
            select_achievement(type){ // 成绩分布 选择年级班级
                this.achievementtype = type;
            },
            select_scoredisparity(type){ // 分数差距 选择年级班级
                this.scoredisparitytype = type;
            },
            select_rankingcontrast(type){ // 排名对比 选择年级班级
                this.rankingcontrasttype = type;
            },
            select_rankingcontrend(type){ // 排名趋势 选择年级班级
                this.rankingcontrendtype = type;
            }
        },
        components: {ReportHeader},
    }
</script>

<style lang="less" scoped>
@import url('../assets/css/stureportcomm.less');
// 报告内容
.report_content {
    clear: both;padding-bottom: 10px;
    background: #fff;
    color: #666666;
    // 报告总结内容样式
    .reportdesc li {
        margin:12px 10px 0 20px;font-size: .26rem;letter-spacing: 1px;display: inline-block;color: #666666;
        span { 
            font-family: '微软雅黑';
            display: inline-block;width: 5px;height: 5px;border-radius: 50%;
            border: 2px solid #FE7032;background: #ffffff;margin-right: 3px;
        }
        b {
            color: #FE7032;font-weight: 400; 
        }
    }
    .reportcontent_title{
        padding: 20px 10px 8px;
        color: #666666;
        border-bottom: 1px solid #D8D8D8;
        font-size: .32rem;
        margin: 10px 10px;
    }
    // 班级分析 年级分析 
    .classanalysis,.gradeanalysis {
        margin: 20px 10px 10px;
        font-size: .32rem;
        .analysisul li ,.analysisul .analusisultitle {text-align: center;padding: 10px 5px}
        .analysisul li > span ,.analysisul .analusisultitle > span {
            display: inline-block;
        }
        .analysisul li {border-bottom: 1px solid #D8D8D8;margin: 0 6px}
        .analysisul li:last-child{border-bottom: none}
        .analysisul .firstspan{
            width: 12%;display: inline-block;font-size: .26rem;
        }
        .analysisul .otherspan{
            width: 42%; display: inline-block;font-size: .26rem;
            .spanshadow {
                border-radius: 15px;
                background-color: #FE7032;
                color: #fff;
                padding: 4px 20px;
            }
        }
    }

    // 优劣势学科
    .prosandcons {
        margin: 20px 10px 10px;
        .analysis-text{
            margin: 10px;
            .title:first-child{
                font-size: .28rem;
                color: #3FBDEF;margin-bottom: 8px
            }
            .title:nth-child(2){
                font-size: .28rem;margin-bottom: 8px
            }
            .content {
                padding: 10px 0;
                font-size: .26rem;
                color: #999999;letter-spacing: 1px;
            }
            .content:last-child {padding-top: 0}
        }
    }

    // 成绩分布
    .achievement_dis {
        margin: 20px 10px 10px;
        .title_cjfb {
            font-size: .24rem;
            position: absolute;
            right: 20px;
            i {
                width: 12px;
                height: 12px;
                margin: -1px 5px;
                display: inline-block;
            }
            .text1 i{
                background: #F8C500;
            }
            .text2 i {
                background: #21ade5;
            }
        }
    }

    // 分数差距
    .scoredisparity {
        margin: 20px 10px 10px;
        .score_gap{
            font-size: .24rem;
            padding: 10px 0;
            margin: 10px;
            display: -webkit-box;
            display: -ms-flexbox;
            -webkit-box-align: middle;
            -ms-flex-align: middle;
            align-items: middle;
            overflow: auto;
            .fircompare-modwarp {
                .fircompare-mod{
                    display: flex;
                }
                .fircompare-mod .moda {
                    width: 1.4rem;
                    line-height: 35px;
                    display: inline-block;
                    background: #f9f9f9;
                    border: 1px solid #dddddd;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    color: #344251;
                    text-align: center;
                    font-size: .24rem;
                }
                .fircompare-mod .modb {
                    width: 1.16rem;
                    line-height: 35px;
                    display: inline-block;
                    background: #f9f9f9;
                    border: 1px solid #dddddd;
                    margin-bottom: 5px;
                    margin-right: 5px;
                    color: #344251;
                    text-align: center;
                }
            }
        }
    }

    // 排名对比
    .rankingcontrast {
        margin: 20px 10px 10px;
        .rankingcontrast_content {
            margin: 10px;
        }
    }

    // 排名趋势
    .rankingcontrend {
        margin: 20px 10px 1px 10px;
    }
}
</style>


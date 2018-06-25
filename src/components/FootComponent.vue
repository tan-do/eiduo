<template>
    <footer>
        <ul>
            <router-link to="/" exact tag="li">
                <div>
                    <p><i class="iconfont icon-baogao"></i></p>
                    <p>成绩报告</p>
                </div>
            </router-link>
            <router-link to="/duo" tag="li">
                <div>
                    <p><i class="iconfont icon-huiyuan"></i></p>
                    <p>多分宝</p>
                </div>

            </router-link>
            <router-link to="/my" tag="li">
                <div>
                    <p><i class="iconfont icon-wode"></i></p>
                    <p>我的</p>
                </div>
            </router-link>
        </ul>
    </footer>
</template>

<style lang="less" scoped>
    footer {
        width: 7.5rem;
        height: 1rem;
        background: #fff;
        position: fixed;
        bottom: 0;
        border-top:1px solid #ddd;
        z-index: 999;
        -webkit-transform: translateZ(0);
        ul{
            display: flex;
            width: 100%;
            height: inherit;
            background: #fff;
            li {
                flex: 1;
                text-align: center;
                background: #fff;
                cursor: pointer;
                display: flex;
                div{
                    margin:auto;
                    //background: pink;
                }
                p{
                    i{font-size: .5rem}
                    font-size: .24rem;
                }


            }
            .router-link-active{color: #F56E03;}
        }

    }
</style>


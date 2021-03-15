<template>


<div class="card animate__animated animate__backInLeft animate__delay-1s" @click="showDetail">
<el-card>
    <template v-slot:header>
        <div class="title">
            众筹定制《悟空追书》小说站
        </div>
    </template>
    <div class="content">
        <div class="left">
            <el-image  src="http://www.7n7n.cn/d/file/zhongchou/1/2018-02-25/609b2317cf629744ae6c071dc97d56bf.png" 
            lazy
            :preview-src-list="['http://www.7n7n.cn/d/file/zhongchou/1/2018-02-25/609b2317cf629744ae6c071dc97d56bf.png']"
            />
            <!-- ing -->
            <img class="state" src="../assets/img/ing.png" alt="">
        </div>
        <div class="right">
            <div class="name">

               <span class="icon el-icon-s-shop"></span> 开发费用：<span class="color">
                    ￥10780元
                </span>
            </div>
            <div class="person">
                <span class="icon el-icon-s-custom"></span>
                人数：<span class="color">人</span> 筹到： <span class="color">980</span> 元
            </div>
            <div class="mubiao">
                <span class="icon el-icon-s-flag"></span>
                底筹：<span class="color">
                    ￥980元
                </span>
            </div>
            <div class="time">
                <span class="icon el-icon-timer"></span>
                发起时间：<span class="color">2018-02-25 11:21:41</span>
            </div>
            <div class="endtime">
                <span class="icon el-icon-time"></span>
                结束时间：<span class="color">时间已到</span>
            </div>
            <div class="shop">
                <span class="icon el-icon-service"></span>
                售后服务：<span class="color">登陆BBS发帖 客服QQ:1250646049</span>
            </div>
            <div class="cart">
                <span class="icon el-icon-shopping-cart-2"></span>
                上架销售：<span class="color">否</span>
            </div>
            <div class="faqi">
                <span class="icon el-icon-s-marketing"></span>
                <span>开发组：</span> <span class="color">123网</span>
            </div>
            <div class="buy">
                <el-button type="danger">立即参加</el-button>
            </div>
        </div>
        <div class="list">
            捐赠者
        </div>
    </div>
</el-card>

<!-- 提示 -->

</div>


</template>




<script>
import { getCurrentInstance } from 'vue'


export default {

components:{
   
}
,setup(){
const instance=getCurrentInstance();
const showDetail=()=>{

instance.emit("showDetails",620);


}

return {
    showDetail
}

}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.card 
    margin 15px 0
    .title
        padding 12px
        font-size 22px
        color #F60
    .content
        display flex
        .left 
            position relative
            width 45%
            .el-image 
                width 100%
                height 350px
            .state 
                position absolute
                left 0
                top 0
        .right 
            margin-left 20px
            &>div 
               &:nth-child(2n)
                    font-size 20px 
                    margin 12px 0
            .name 
                font-size 22px
                span 
                    font-size 28px
            .person 
                font-size 18px
                margin 8px 0
                letter-spacing 1.5px
        span.color 
                color #f66
                font-style italic
        span.icon 
            vertical-align middle
</style>
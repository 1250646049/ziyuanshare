<template>


<div class="big animate__animated animate__fadeInLeft" @click="alterShow" v-if="show">

    <el-card class="card">
            <freeItem style="width:100%;"/>
               <div class="detail animate__animated  animate__fadeInDown animate__delay-1s">
                    <el-tag
                    type="info"
                    size="medium"
                    >
                        进入资源详情页
                    </el-tag>
                    <!-- 别名 -->
                    <div class="otherName">
                        <h3>别名：</h3>
                    <span>放逐心声</span> / <span>迷失某地</span> / <span>某个地方</span> / <span>某个地方</span> / <span>在某一方</span>
                    </div>
                    <!-- 资源简介 -->
                    <div class="intro">
                        <h3>简介：</h3>
        约翰尼是好莱坞著名的“浪荡子”。他的各种负面新闻会迅速抢占各个报纸的八卦头条。
        这个浪荡子现在居住在好莱坞的一间酒店里，每天过着声色犬马的生活：天天开着自己的法拉利出去飙车，身边的美女如云，成天嗑药，似乎这样坐吃等死才是他活着的唯一目的。这种麻痹的生活让约翰尼如坠云雾，他也乐得享受这种状态。
        突然有一天，一个名叫克里奥的11岁小姑娘出现在他的面前。这个女孩是他一次在酒店里巫山云雨之后避孕失败的产物。这个不期而遇的人逼迫约翰尼不得不去面对自己的生活和过往。一个现实的问题摆在他的面前：到底应该怎么才能和一个11岁的女儿相处？
                    </div>
                    <!-- other -->
                    <div class="actor">
                        <h3>导演：</h3>
                    <span>索菲亚·科波拉</span>

<h3>编剧：</h3>
<span>索菲亚·科波拉</span>

<h3>公司/电视台：</h3>
<span>暂无</span>

<h3>主演：</h3>
 <span>艾丽·范宁 / <span>米歇尔·莫娜汉</span> / <span>斯蒂芬·多尔夫</span> / <span>本尼西奥·德尔·托罗</span> / <span>罗伯特·斯沃兹曼</span></span>
                    </div>
             </div>
    </el-card>

    <!-- other detail -->
 
</div>


</template>




<script>
import { getCurrentInstance, onMounted } from 'vue'

import freeItem from "./freeItem"
export default {
props:{
    show:{
        type:Boolean,
        default:false
    }

},
components:{
    freeItem
},

setup(){
 const instance=getCurrentInstance();   
 const allBus=instance.appContext.config.globalProperties.$allbus
const alterShow=()=>{

    instance.emit("showBig",{show:false})
    allBus.emit("shows");
   
}

onMounted(()=>{
    // instance.appContext.config.globalProperties.$allbus.emit("shows");
  
})
return {
    alterShow
}
}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.big 

    position fixed
    top 0
    left 0
    right 0
    right 0
    bottom 0
    background rgba(255,255,255,.6)
    z-index 9999
    
    .card
        width 40%
        border-radius 20px
        position absolute
        left 50%
        transform translateX(-50%)
        top 30%
        bottom 0
        overflow-y scroll
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
      

        }
    .detail
        
        width 100%
        padding 0 8px
        .otherName
            span 
                margin 0 4px
        .intro 
            line-height 1.5
            color #333;
</style>
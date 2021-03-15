// 首页博客

<template>

<div class="blok  animate__animated animate__backInLeft animate__delay-1s">
<!-- 推荐主题 -->
<el-row>
    <el-col :span="20" :offset="2">
        <Tuijian/>
        <Bankuai>
            <template v-slot:title>
                <div class="title">
                    <span class="icon el-icon-picture-outline-round
"></span> 平面设计素材
                </div>
            </template>
            
            <template v-slot:content>
                <div class="content">
                    <Items v-for="item in 12" :key="item"/>
                </div>
            </template>
        </Bankuai>

        <Total/>
    </el-col>
</el-row>
</div>


</template>




<script>
import Tuijian from "./blog_tuijian"
import Bankuai from "./blog_bankuai"
import Items from "./blog_item"
import Total from "./blog_total"
export default {
components:{
    Tuijian,
    Bankuai,
    Items,
    Total
}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.blok
    margin-top 20px
    .title
        color #333
        font-size 18px
        font-weight 600
        position relative
        &::after
            content ""
            position absolute
            width 30px
            height 3px
            background #000
            left 0
            bottom -8px 
    .content
        overflow hidden
        width 102%
        display flex
        flex-wrap wrap
        margin 6px 0
</style>
<template>


<div class="item">
<el-card body-style="padding:6px 4px">
    <template v-slot:header>
    <div class="blog_img">
        <img  src="../assets/img/Konte.jpg"/>
    </div>

    </template>
     <div class="content">
            <div class="tag">
                <el-tag type="success" size="small">测试主题</el-tag>
            </div>   
            <div class="name">
                Konte – 简约现代购物商城 WordPress 主题
            </div> 
            <div class="subtitle">
                Konte 适合数码商店、高科技商店、手表商店、男装商店、女装商店、服装商店、家具66666
            </div>
            <el-divider/>
            <div class="bottom">
                <span  class="avatar">
                <el-avatar :src="'assets/img/03b0d39583f48206768a7534e55bcpng.png'"></el-avatar> 油条   
                </span><span class="el-icon-time"> 两天前</span><span class="el-icon-s-custom"> 看过</span><span></span>
            </div>
        </div>    
</el-card>

</div>


</template>




<script>


export default {


}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.item
    width 235px
    margin-left 15px
    margin-right 15px
    margin-top 15px
    .blog_img
        height 156px
        width 235px
        overflow hidden
        img 
            width 100%
            height 100%
            transition all .3s
            &:hover 
                transform scale(1.5)
    .tag
        margin 8px 2px
        .el-tag 
            margin 0 3px
    .name 
        
        
        color:#212529;
        font-weight 600
    
    .subtitle 
        font-size 13px
        color #666
        margin 8px 0
        height 36px
        overflow hidden
        text-overflow ellipsis
        
    .bottom
        display flex
        justify-content space-between
        align-items center
        .el-avatar
            width 25px
            height 25px
        span 
            vertical-align middle
            color #aaa
            font-size 14px
            margin 0 3px
</style>
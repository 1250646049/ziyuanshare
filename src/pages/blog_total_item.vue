<template>


<div class="wrap">

    <div class="item">
        <div class="newTime">
            <img src="../assets/img/Book-a-house-cleaning-cleaner.png"  >
            <div class="tag">
               <span class="icon el-icon-s-unfold"></span>  2021年优秀wordpress主题 <el-tag type="danger" size="small">共9个主题</el-tag>
            </div>
            <div class="contents">
                <h3>日主题-V2视频演示介绍</h3>
                <p>日主题v2是一款全新架构的Wordpress主题。兼容老款日</p>
            </div>


        </div>
               <ul class="listItem">
                <li><span>1</span>
                <p>日主题-V2视频演示介绍</p></li>
                <li><span>2</span>
                <p>Zazla – 时尚极简 WooCommerce 主题</p></li>
                <li><span>3</span>
                <p>Trendkit – 软件高科技企业WP主题</p></li>
                <li><span>4</span>
                <p>Tisara 珠宝 WooCommerce 主题</p></li>
            </ul>
    </div>




</div>


</template>




<script>


export default {


}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
    width 23%
    
    display flex
    justify-content space-between
    margin 20px 0
    .item

        width 100%  
        .newTime 
            img 
                width 100%
                height 100%
            position relative

            .contents
                position absolute
                background #fff
                left 0
                right 0
                bottom 0
                border-bottom 1px solid #EEF0F7
                h3 
                    margin 3px 0
                    font-size 16px 
                p 
                    font-size 14px
                    white-space nowrap
                    
                    overflow hidden
                    text-overflow ellipsis
                padding 8px
            .tag
                .icon
                    font-size 18px
                    vertical-align text-top
                position absolute
                z-index 15
                top 25px
                left 0
                background #536DE6
                font-size 14px
                color white
                padding 6px
            &::before 
                content ""
                position absolute
                top 0
                bottom 0
                left 0
                right 0
                background rgba(0,0,0,.6)
        .listItem
            padding 8px
            background #fff
            margin 0
            li 
                font-size 14px
                color #212529
                border-bottom 1px solid #EEF0F7
                display flex
                align-items center
                &:last-child 
                    border-bottom none
                    
                span
                    height  20px
                    width 20px
                    
                    display inline-block
                    margin 0 8px 0 12px
                    color white
                    text-align center
                    line-height 20px
                    font-size 14px
                &:first-child
                    span  
                        background #ff5b5b
                &:nth-child(2)
                    span 
                        background blue 
                &:nth-child(3)
                    span  
                        background green 
                &:nth-child(4) 
                    span
                        background yellow
                    

</style>
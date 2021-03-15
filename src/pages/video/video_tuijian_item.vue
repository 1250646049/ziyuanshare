<template>


<div class="tuijianItem">
    <div class="left">
        <Video/>
    </div>
    <div class="right">
        <ul>

            <li v-for="item in 5 " :key="item"><div class="imgs"><img src="../../assets/img/Hadam-Handwritten-Font.jpg" alt=""></div><div class="items">
                <h4>Hadam – Handwritten Font</h4>
                <div class="subtitle">
                    6666666666666666666
                </div>
                <div class="time">
                    2021/3/14 15:17
                </div>
                </div></li>

        </ul>
    </div>

</div>


</template>




<script>

import Video from "./video"
export default {
components:{
    Video
}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.tuijianItem
    margin-top 20px
    display flex
    .left 
        width 45%
        background #fff
        height 400px
    .right
        width 45%
        ul 
            margin 0
            li 
                cursor pointer
                &:first-child 
                    margin 0
                background #fff
                margin 10px 0
                display flex
                img 
                    width 100px
                .items
                    margin-left 15px
                    display flex
                    flex-direction column
                    h4 
                        margin 0
                .subtitle 
                    font-size 14px
                    margin 6px 0 0 0
                    color #000
                .time
                    font-size 12px
</style>
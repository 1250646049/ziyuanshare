<template>


<div class="total">
<Bankuai>
    <template v-slot:title>
        <div class="title">
         <span class="icon el-icon-s-data"></span>   专题推荐展示集锦
        </div>
    </template>
    <template v-slot:content>
        <div class="content">
            <Items v-for="item in 4" :key="item"/>
        </div>

    </template>

</Bankuai>

</div>


</template>




<script>
import Items from "./blog_total_item"
import Bankuai from "./blog_bankuai"
export default {

components:{
    Bankuai,
    Items

}


}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.total 
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
        display flex
        justify-content space-between
</style>
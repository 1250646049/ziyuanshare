<template>


<div class="tuijian">
    <el-row>
        <el-col :span="20" :offset="2">
            <Bankuai>
                <template v-slot:title>
                <div class="title">
                    <span class="icon el-icon-film">
                    </span>
                    推荐影视
                </div>
                </template>

                <template v-slot:content>
                    <Items/>
                </template>
            </Bankuai>
        </el-col>

    </el-row>

</div>


</template>




<script>

import Bankuai from "../blog_bankuai"
import Items from "./video_tuijian_item"
export default {

components:{
    Bankuai,
    Items
}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.tuijian 
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

</style>